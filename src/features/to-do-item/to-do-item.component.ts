import { Input,Output,Component, EventEmitter, HostListener } from '@angular/core';
import { Item } from 'src/app/app.component';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent {
  @Input() item: Item;
  @Input() tabindex: number;

  @Output() OnComplete = new EventEmitter<Item>();
  @Output() OnDelete = new EventEmitter<Item>();
  @Output() keydownEvent = new EventEmitter<KeyboardEvent>();

  @HostListener('keydown', ['$event'])
  OnKeydown(event: KeyboardEvent) {
    this.keydownEvent.emit(event);
  }



  public ClickComplete(): void {
    // this.item.isCompleted = !this.item.isCompleted;
    this.OnComplete.emit(this.item);
  }

  public ClickDelete(): void {
    this.OnDelete.emit(this.item);
  }
}
