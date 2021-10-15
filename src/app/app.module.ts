import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
