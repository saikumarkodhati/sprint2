import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReadUiComponent } from './read-ui.component';

@NgModule({
  declarations: [
    ReadUiComponent
  ],
  imports: [CommonModule],
  exports:[ReadUiComponent,CommonModule]
})
export class ReadUIModule { }