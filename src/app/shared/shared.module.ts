import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { ContentComponent } from './components/content/content.component';
import { ContentModule } from './components/content/content.module';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    ContentModule
  ]
})
export class SharedModule { }
