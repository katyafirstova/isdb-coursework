import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {LoginPayload} from "../auth/login-payload";

import {ErrorService} from "./error.service";
import {User} from "../model/user";
import {AuthResponse} from "../model/auth-response";
import {PointService} from "./point.service";
import {Router} from "@angular/router";
// import {HitsService} from "./hits.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public authenticated = false;

    constructor(private http: HttpClient, private router: Router) { }
    login(user: User) {
        return this.http.post("api/auth/login", user)
            .pipe(tap(data => {
                const token = (<AuthResponse>data).message;
                localStorage.setItem('authToken', <string>token);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.authenticated = true;
            }, error => {
                console.log('login error: ' + error);
            }));
    }
    register(user: User) {
        return this.http.post( 'api/auth/register', user);
    }

    // logOut() {
    //     const user: User = JSON.parse(localStorage.getItem('currentUser'));
    //
    //     return this.http.post( '/users/logout', user, {headers: this.getHeaders()}).subscribe(
    //         data => {
    //             this.authenticated = false;
    //         },
    //         error => {
    //             console.log('logout error: ' + error);
    //         })
    //         // Действия, которые делаем в самом конце
    //         .add(() => {
    //             localStorage.removeItem('authToken');
    //             localStorage.removeItem('currentUser');
    //             // Надо обновить страницу, чтобы стили корректно подгрузились и так как данных о пользователе уже нет
    //             // будет автоматический редирект на страницу логина
    //             window.location.reload();
    //         });
    // }




}
