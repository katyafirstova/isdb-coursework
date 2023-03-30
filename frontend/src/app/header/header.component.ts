import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    smallWidth = window.innerWidth < 400

    constructor(authService: AuthService, router: Router) {
        if (authService.setIsAuth()) {
            router.navigate(['']);
        }
    }

    ngOnInit(): void {
        // this.authService.restoreAuth().subscribe(()=>{
        //   this.authService.setIsAuth(true)
        //   this.redirect("main")
    }


}
