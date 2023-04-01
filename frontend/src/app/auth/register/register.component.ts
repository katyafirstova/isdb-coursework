import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from "../../model/user";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private accountService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.accountService.register(this.user).subscribe(data => {
          this.router.navigate(['/login']).then();
        }, (err: HttpErrorResponse) => {
          console.log(err);
          switch (err.status) {
            case 0:
              this.errorMessage = 'Невозможно подключиться к серверу';
              break;
            case 409:
              this.errorMessage = 'Пользователь с данным именем уже существует';
              break;
            default:
              this.errorMessage = 'Неизвестная ошибка ' + err.status;
          }
        }
    );
  }

  // username: string = ""
  // password: string = ""
  // password2: string = ""
  //
  // usernameIsShort: boolean = false
  // passwordIsShort: boolean = false
  // passwordsEquals: boolean = true
  //
  // constructor(private router: Router, private authService : AuthService) {
  //
  // }
  // ngOnInit() {
  //
  // }
  //
  // redirect(path: String) {
  //   this.router.navigate([path])
  // }
  //
  // signUp() {
  //   if (this.validateForm()) {
  //     this.authService.register(this.username, this.password).subscribe(() => {
  //       this.router.navigate(['/register-success'])
  //     })
  //   }
  // }
  //
  // validateForm(): boolean {
  //   this.usernameIsShort = this.username.length == 0
  //   this.passwordIsShort = this.password.length == 0
  //   this.passwordsEquals = this.password == this.password2
  //   return  !this.usernameIsShort && !this.passwordIsShort && this.passwordsEquals
  // }

}

