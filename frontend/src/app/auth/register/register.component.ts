import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = ""
  password: string = ""
  password2: string = ""

  usernameIsShort: boolean = false
  passwordIsShort: boolean = false
  passwordsEquals: boolean = true

  constructor(authService: AuthService, router: Router) {

  }
  ngOnInit() {
  }

  validateForm(): boolean {
    this.usernameIsShort = this.username.length == 0
    this.passwordIsShort = this.password.length == 0
    this.passwordsEquals = this.password == this.password2
    return  !this.usernameIsShort && !this.passwordIsShort && this.passwordsEquals
  }
}
