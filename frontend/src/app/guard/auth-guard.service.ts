import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isAuthorized: boolean = localStorage.getItem('currentUser') != null;
        console.log(isAuthorized);
        console.log(state.url);
        if (!isAuthorized && state.url.search('main') != -1) {
            this.router.navigate(['login']);
            return false;

        } else if (isAuthorized && state.url.search('auth') != -1) {
            this.router.navigate(['main']);
            return false;
        }
        return true;
    }

}
