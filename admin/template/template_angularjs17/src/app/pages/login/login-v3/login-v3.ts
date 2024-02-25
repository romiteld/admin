import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
  selector: 'login-v3',
  templateUrl: './login-v3.html'
})

export class LoginV3Page implements OnDestroy {
  constructor(private router: Router, private renderer: Renderer2, public appSettings: AppSettings) {
    this.appSettings.appEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  formSubmit(f: NgForm) {
    this.router.navigate(['']);
  }
}
