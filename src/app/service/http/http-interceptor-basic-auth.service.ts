import { Injectable } from '@angular/core';
import { HttpInterceptor , HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService  implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // tslint:disable-next-line: prefer-const
    let username = 'sindhu';
    // tslint:disable-next-line: prefer-const
            let password = 'sindhu';
            // tslint:disable-next-line: prefer-const
            let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password);
           request = request.clone({
             setHeaders: {
               Authorization : basicAuthHeaderString
             }
           });
           return next.handle(request);
  }
}
