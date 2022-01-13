import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthHeaderInterceptors } from "./auth-header-interceptors";

export const httpInterceptProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptors, multi: true },
]