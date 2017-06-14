import { Component, OnInit } from '@angular/core';

import { AuthService } from "../shared/services/auth.service";
import {Router} from "@angular/router";

/**
 * This class represents the lazy loaded TestComponentComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-test',
  templateUrl: 'test-component.component.html',
  styleUrls: ['test-component.component.css'],
})
export class TestComponentComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {}

    logoutUser() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}
