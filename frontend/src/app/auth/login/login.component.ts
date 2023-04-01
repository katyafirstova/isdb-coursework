import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from "../../model/user";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: User = new User();
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    this.authService.login(this.user).subscribe(
        resp => this.router.navigate(['/main']),
        (err: HttpErrorResponse) => {
          console.log(err);
          switch (err.status) {
            case 0:
              this.errorMessage = 'Невозможно подключиться к серверу';
              break;
            case 401:
              this.errorMessage = 'Введен неверный логин или пароль';
              break;
            default:
              this.errorMessage = 'Неизвестная ошибка ' + err.status;
          }
        });
  }




}
