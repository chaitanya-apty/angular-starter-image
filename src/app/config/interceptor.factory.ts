import { XHRBackend, Http, RequestOptions } from "@angular/http";
import { HttpInterceptor } from "./interceptor.service";

// http interceptor factory
export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new HttpInterceptor(xhrBackend, requestOptions);
}
