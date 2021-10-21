import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCadastroComponent } from './content-cadastro/content-cadastro.component';
import { ContentComponent } from './content.component';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';

@NgModule({
  declarations: [
    ContentComponent,
    ContentCadastroComponent,
    ContentDashboardComponent
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
