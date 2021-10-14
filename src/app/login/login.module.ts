import { NgModule } from '@angular/core';
import { InfoModule } from './info/info.module';
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
    InfoModule
  ],
  providers: [],
  bootstrap: []
})

export class LoginModule { }
