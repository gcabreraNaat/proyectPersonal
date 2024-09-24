import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        // const headers: HttpHeaders = request.headers;
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        // const fullRequest = request.clone({ headers });
        return next.handle(request);
    }

}