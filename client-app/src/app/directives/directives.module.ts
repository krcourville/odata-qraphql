import { NgModule } from '@angular/core';
import { DisableNoLoginDirective } from './disable-no-login.directive';
import { CoreServicesModule } from '../core-services';

const DIRECTIVES = [
  DisableNoLoginDirective
];

@NgModule({
  imports: [
    CoreServicesModule
  ],
  declarations: [
    ...DIRECTIVES
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class DirectivesModule {

}
