import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCadastroComponent } from './content-cadastro/content-cadastro.component';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    ContentComponent,
    ContentCadastroComponent
  ],
  exports:[
    ContentComponent,
    ContentCadastroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
