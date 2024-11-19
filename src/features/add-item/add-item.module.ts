import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  exports:[AddItemComponent]
})
export class AddItemModule { }
