import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { ErrorMessageService } from '../services/error-message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorMessageService: ErrorMessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let handled: boolean = false;

    return next.handle(request).pipe(
      retry(1),
      catchError((error) => {
        let errorMessage = null;

        if (error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.message}`;
        } else if (error instanceof HttpErrorResponse) {
          errorMessage = `${error.name} ${error.status}: ${error.message}`;

          handled = this.handleServerSideError(error);
        }

        if (!handled) {
          if (errorMessage) {
            return throwError(errorMessage);
          } else {
            return throwError('Unexpected problem occurred');
          }
        } else {
          return of(error);
        }
      })
    );
  }

  handleServerSideErrorCase(error, handled) {
    this.errorMessageService.message.next(`${error.statusText} ${error.status}`);
    handled = true;
    this.errorMessageService.error.next(handled)
  }

  private handleServerSideError(error: HttpErrorResponse): boolean {
    let handled: boolean = false;

    switch (error.status) {
      case 0: // Unknown error
      case 404: // Not found
      case 401: // Unautorized
      case 403: // Forbidden
      case 503: // Server error
        this.handleServerSideErrorCase(error, handled)
        break;
    }

    return handled;
  }
}
