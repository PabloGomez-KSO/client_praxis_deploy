import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        //handle your auth error or rethrow
        if (err.status === 403) {
            console.log("interceptor");
            //navigate /delete cookies or whatever
            this.router.navigate(['student/login']);
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return Observable.of(err.message);
        }
        return throwError(err);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.

   // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
        return next.handle(req).catch(x=> this.handleAuthError(x)); //here use an arrow function, otherwise you may get "Cannot read property 'navigate' of undefined" on angular 4.4.2/net core 2/webpack 2.70
    }
}
