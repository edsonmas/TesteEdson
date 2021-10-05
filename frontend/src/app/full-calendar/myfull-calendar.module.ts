import { MyFullCalendarRoutingModule } from './myfull-calendar-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from 'primeng';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFullCalendarRoutingModule,
    FullCalendarModule


  ]
})
export class MyFullCalendarModule { }
