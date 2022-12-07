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
      catchError((returnedError) => {
        let errorMessage = null;

        if (returnedError.error instanceof ErrorEvent) {
          errorMessage = `Error: ${returnedError.error.message}`;
        } else if (returnedError instanceof HttpErrorResponse) {
          errorMessage = `Error Status ${returnedError.status}: ${returnedError.error.error} - ${returnedError.error.message}`;
          handled = this.handleServerSideError(returnedError);
        }

        console.error(errorMessage ? errorMessage : returnedError);

        if (!handled) {
          if (errorMessage) {
            return throwError(errorMessage);
          } else {
            return throwError('Unexpected problem occurred');
          }
        } else {
          return of(returnedError);
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
        this.handleServerSideErrorCase(error, handled)
        break;
      case 404: // Not found
      this.handleServerSideErrorCase(error, handled)
        break;
      case 401: // Unautorized
      this.handleServerSideErrorCase(error, handled)
        break;
      case 403: // Forbidden
      this.handleServerSideErrorCase(error, handled)
        break;
      case 503: // Server error
      this.handleServerSideErrorCase(error, handled)
        break;
    }

    return handled;
  }
}
