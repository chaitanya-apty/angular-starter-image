import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../shared/services/auth.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {

    // credentials
    loginForm: FormGroup;

    constructor(private router: Router, private authService: AuthService, formBuilder: FormBuilder) {
        // login form validation
        this.loginForm = formBuilder.group({
            'username': [ null, Validators.required ],
            'password': [ null, Validators.required ]
        });
    }

    ngOnInit() {
        // check if user is already logged in.
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
            return;
        }
        // reset login status
        this.authService.logout();
    }

    login(form: any): void {
        this.authService.login(form.username, form.password)
          .subscribe(result => {
              if (result == true) {
                  this.router.navigate(['test']);
              }
          });
    }
}
