import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  message: BehaviorSubject<string> = new BehaviorSubject('');
  error: BehaviorSubject<boolean> = new BehaviorSubject(null);
}
