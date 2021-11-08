import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  bootstrap: []
})

export class LoginModule { }
