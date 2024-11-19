import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ToDoItemComponent } from './to-do-item.component';
import {  MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ToDoItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[ToDoItemComponent]
})
export class ToDoItemModule { }
