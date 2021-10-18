import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule
  ]
})
export class SharedModule { }
