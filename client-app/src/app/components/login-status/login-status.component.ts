import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  @Input()
  isAuthenticated = false;

  @Input()
  userId: string = null;

  @Output()
  loginClick = new EventEmitter();

  @Output()
  logoutClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onLoginClick() {
    this.loginClick.emit();
  }

  onLogoutClick() {
    this.logoutClick.emit();
  }

}
