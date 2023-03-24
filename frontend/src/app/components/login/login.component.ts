import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    // styleUrls: ['./sign-in.component.scss']
})
export class LoginComponent {

    username: string = ""
    password: string = ""

    usernameIsShort: boolean = false
    passwordIsShort: boolean = false

    constructor(private router: Router, private authService: AuthService) {
    }

    redirect(path: String) {
        this.router.navigate([path])
    }

    signIn() {
        if (this.validateForm()) this.authService.auth(this.username, this.password).subscribe((res)=>{
            console.log(res.jwtAccessToken)
            this.router.navigate(['/main'])
        })
    }

    validateForm()
        :
        boolean {
        this.usernameIsShort = this.username.length == 0
        this.passwordIsShort = this.password.length == 0
        return !this.usernameIsShort && !this.passwordIsShort
    }

}
