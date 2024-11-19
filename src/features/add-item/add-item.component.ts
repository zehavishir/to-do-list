import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  public ItemContent: string = '';
  public IsDialogOpen: boolean = false;
  @ViewChild('taskInput') taskInput!: ElementRef;

  @Output() OnAddItem = new EventEmitter<string>();

  public AddItem(): void {
    this.OnAddItem.emit(this.ItemContent);
    this.ItemContent = '';
    this.CloseDialog();
  }

  public OpenDialog(): void {
    this.IsDialogOpen = true;
    setTimeout(() => this.taskInput?.nativeElement.focus(), 0);
  }

  public CloseDialog(): void {
    this.IsDialogOpen = false;
  }

}
