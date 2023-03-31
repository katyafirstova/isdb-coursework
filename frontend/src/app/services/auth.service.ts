import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {LoginPayload} from "../auth/login-payload";

import {ErrorService} from "./error.service";
import {User} from "../model/user";
import {AuthResponse} from "../model/auth-response";
import {PointService} from "./point.service";
// import {HitsService} from "./hits.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isAuth = false
    constructor(private http: HttpClient, private errorService: ErrorService, private pointService: PointService) {
    }

    setIsAuth() : boolean {
        return this.isAuth;
    }

    getIsAuth(): boolean {
        return this.isAuth
    }
    restoreAuth() {
        return this.http.post("api/points/getPoints", {
            page: 1,
            offset: "Asia/Tokyo"
        }).pipe(
            delay(1000),
            retry(2)
        )
    }

    login(username: string, password: string): Observable<LoginPayload> {
        return this.http.post<LoginPayload>("api/auth/login",
            {
                username: username,
                password: password
    }).pipe(
            catchError(this.errorHandler.bind(this))
        )
    }


    register(username: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>("/api/auth/register",
            {
                username: username,
                password: password
            }).pipe(
            catchError(this.errorHandler.bind(this))
        )
    }


    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.error.message)
        return throwError(() => error.message)
    }

}
