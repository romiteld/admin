import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
  selector: 'login-v1',
  templateUrl: './login-v1.html'
})

export class LoginV1Page implements OnDestroy {
  constructor(private router: Router, public appSettings: AppSettings) {
    this.appSettings.appEmpty = true;
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
  }

  formSubmit(f: NgForm) {
    this.router.navigate(['']);
  }
}
