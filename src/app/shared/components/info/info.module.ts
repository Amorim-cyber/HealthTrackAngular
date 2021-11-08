import { NgModule } from '@angular/core';
import { InfoComponent } from './info.component';
import { DetailsComponent } from './details/details.component';
import { OtherOptionsComponent } from './other-options/other-options.component';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    InfoComponent,
    DetailsComponent,
    OtherOptionsComponent
  ],
  exports: [
    InfoComponent,
    DetailsComponent,
    OtherOptionsComponent
  ],
  imports: [
    NgbCollapseModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})

export class InfoModule { }
