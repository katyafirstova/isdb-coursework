import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {ErrorService} from "../services/error.service";
import {AuthResponse} from "../model/auth-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false

  constructor(private http: HttpClient, private errorService: ErrorService) {
  }

  setIsAuth(condition: boolean) {
    this.isAuth = condition
  }

  getIsAuth(): boolean {
    return this.isAuth
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("/api/auth/login",
        {
          username: username,
          password: password
        })
        .pipe(
        catchError(this.errorHandler.bind(this))
    )
  }

  register(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("/api/auth/register",
        {
          username: username,
          password: password
        })
    .pipe(
    catchError(this.errorHandler.bind(this))
    )
  }
    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.error.message)
        return throwError(() => error.message)
    }



}

