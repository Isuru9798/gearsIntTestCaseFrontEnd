import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()

export class AuthHeaderInterceptors implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const authHeader = request.clone({
            setHeaders: {
                Authorization: localStorage.getItem('token') || '',
            }
        });
        return next.handle(authHeader);
    }
}