import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ToDoItemComponent } from './to-do-item.component';


@NgModule({
  declarations: [ToDoItemComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[ToDoItemComponent]
})
export class ToDoItemModule { }
