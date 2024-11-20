import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  content: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list';

  public List$:BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([
    {
      content:'finish homework',
      isCompleted: false
    },
    {
      content:'finish laundry',
      isCompleted: false
    },
    {
      content:'cook dinner',
      isCompleted: false
    },
    {
      content:'go visit grandma',
      isCompleted: false
    }
  ]);
  public LiveMessage: string = '';
  public FocusedIndex: number = 0; 
  private liveMessageQueue: string[] = [];

  constructor(){}

  public Complete(completedItem: Item) {
    const currentArray = this.List$.getValue();
    const updatedArray = currentArray.map(item =>
      item === completedItem ? { content: item.content, isCompleted: true } : item
    );
    this.List$.next(updatedArray);
    this.LiveMessage = `${completedItem.content} was completed successfully`;
    this.addLiveMessage(this.LiveMessage);
  }

  public Delete(deletedItem: Item) {
    const currentArray = this.List$.value;
    const updatedArray = currentArray.filter(item => item.content !== deletedItem.content);
    this.List$.next(updatedArray);
    this.LiveMessage = `${deletedItem.content} was deleted successfully`;
    this.addLiveMessage(this.LiveMessage);
  }

  public AddItem(ItemContent: string): void {
    const currentArray = this.List$.value;
    const updatedArray = [...currentArray, {content: ItemContent, isCompleted: false}];
    this.List$.next(updatedArray);
    this.LiveMessage = `${ItemContent} added successfully`;
    this.addLiveMessage(this.LiveMessage);
  }

  private addLiveMessage(message: string) {
    this.liveMessageQueue.push(message);
    this.processLiveMessages();
  }
  
  private processLiveMessages() {
    if (this.LiveMessage === '' || this.liveMessageQueue.length === 0) {
      return;
    }
  
    this.LiveMessage = this.liveMessageQueue.shift();
    setTimeout(() => {
      this.LiveMessage = '';
      this.processLiveMessages(); 
    }, 3000);
  }

  public OnKeyDown(event: KeyboardEvent, index: number) {
    switch (event.key) {
      case 'ArrowDown':
        this.focusNextItem(index);
        break;
      case 'ArrowUp':
        this.focusPrevItem(index);
        break;
      case 'Escape':
        this.focusPrevItem(index);
        break;
    }
  }

  private focusNextItem(index: number): void {
    if (index < this.List$.value.length - 1) {
      this.FocusedIndex = index + 1;
    }
  }

  private focusPrevItem(index: number): void {
    if (index > 0) {
      this.FocusedIndex = index - 1;
    }
  }

}
