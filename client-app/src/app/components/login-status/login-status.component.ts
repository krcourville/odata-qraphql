import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  onLoginClick() {
    this.loginClick.emit();
  }

  showLoginPrompt(template: TemplateRef<any>) {
    // template: TemplateRef<any>
    this.modalRef = this.modalService.show(template);
  }

}
