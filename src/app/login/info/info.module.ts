import { NgModule } from '@angular/core';
import { InfoComponent } from './info.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    InfoComponent,
    DetailsComponent
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
