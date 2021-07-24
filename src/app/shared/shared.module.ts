import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { SegmentComponent } from '../elements/segment/segment.component';



@NgModule({
  declarations: [
    DividerComponent,
    SegmentComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [DividerComponent, SegmentComponent]
})
export class SharedModule { }
