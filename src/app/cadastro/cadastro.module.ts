import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CadastroComponent } from './cadastro.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CadastroComponent,
    ContentComponent
  ],
  exports:[
    CadastroComponent,

  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class CadastroModule { }
