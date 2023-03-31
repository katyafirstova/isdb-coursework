import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from "../../model/user";

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

  constructor(private router: Router, private authService : AuthService) {

  }
  ngOnInit() {

  }

  redirect(path: String) {
    this.router.navigate([path])
  }

  signUp() {
    if (this.validateForm()) {
      this.authService.register(this.username, this.password).subscribe(() => {
        this.router.navigate(['/register-success'])
      })
    }
  }

  validateForm(): boolean {
    this.usernameIsShort = this.username.length == 0
    this.passwordIsShort = this.password.length == 0
    this.passwordsEquals = this.password == this.password2
    return  !this.usernameIsShort && !this.passwordIsShort && this.passwordsEquals
  }

}

