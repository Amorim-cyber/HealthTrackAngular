import { NgModule } from '@angular/core';
import { InfoComponent } from './info.component';
import { DetailsComponent } from './details/details.component';
import { OtherOptionsComponent } from './other-options/other-options.component';


@NgModule({
  declarations: [
    InfoComponent,
    DetailsComponent,
    OtherOptionsComponent
  ],
  exports: [
    InfoComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: []
})

export class InfoModule { }
