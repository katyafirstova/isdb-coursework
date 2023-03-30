import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginPayload} from '../login-payload';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  username: string = ""
  password: string = ""

  usernameIsShort: boolean = false
  passwordIsShort: boolean = false

  constructor(private router: Router, private authService: AuthService) {
  }

  redirect(path: String) {
    this.router.navigate([path])
  }

  // login() {
  //   if (this.validateForm()) this.authService.login(this.username, this.password).subscribe((res)=>{
  //     console.log(res.jwtAccessToken)
  //     this.router.navigate(['/main'])
  //   })
  // }

  validateForm() : boolean {
    this.usernameIsShort = this.username.length == 0
    this.passwordIsShort = this.password.length == 0
    return !this.usernameIsShort && !this.passwordIsShort
  }

  ngOnInit() {
  }

}
