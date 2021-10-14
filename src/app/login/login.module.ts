import { NgModule } from '@angular/core';
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
  ],
  providers: [],
  bootstrap: []
})

export class LoginModule { }
