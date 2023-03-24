import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "./error-service";
import {AuthResponse} from "../models/auth-response";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isAuth = false

    constructor(private http: HttpClient,  private errorService: ErrorService) {
    }

    setIsAuth(condition: boolean) {
        this.isAuth = condition
    }

    getIsAuth(): boolean {
        return this.isAuth
    }



    auth(username: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>("/api/login",
            {
                username: username,
                password: password
            }).pipe(
            catchError(this.errorHandler.bind(this))
        )
    }

    register(name: string, username: string, password: string): Observable<AuthResponse> {
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

    logout() {
        // this.hitsSerivce.currentPage = 1
        // this.hitsSerivce.pagesCount = 1
        // this.hitsSerivce.hits = []
        return this.http.get("/api/auth/logout").pipe(retry(2))
    }
}
