import { Directive, HostBinding } from '@angular/core';
import { AuthService } from '../core-services';

@Directive({
  selector: '[appDisableNoLogin]'
})
export class DisableNoLoginDirective {

  constructor(
    private auth: AuthService
  ) { }

  @HostBinding('disabled')
  get isDisabled() {
    return !this.auth.isAuthenticated;
  }

}
