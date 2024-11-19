import { Component, ElementRef, ViewChild } from '@angular/core';
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
  public AddedItem: boolean = false;
  public ItemContent: string = '';
  public IsDialogOpen: boolean = false;
  public LiveMessage: string = '';
  private liveMessageQueue: string[] = [];
  @ViewChild('taskInput') taskInput!: ElementRef;

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

  public AddItem(): void {
    const currentArray = this.List$.value;
    const updatedArray = [...currentArray, {content: this.ItemContent, isCompleted: false}];
    this.List$.next(updatedArray);
    this.LiveMessage = `${this.ItemContent} added successfully`;
    this.AddedItem = false;
    this.ItemContent = '';
    
    this.addLiveMessage(this.LiveMessage);
    this.CloseDialog();
  }

  public OpenDialog(): void {
    this.IsDialogOpen = true;
    setTimeout(() => this.taskInput?.nativeElement.focus(), 0);
  }

  public CloseDialog(): void {
    this.IsDialogOpen = false;
  }

  private addLiveMessage(message: string) {
    this.liveMessageQueue.push(message);
    this.processLiveMessages();
  }
  
  private processLiveMessages() {
    if (this.LiveMessage || this.liveMessageQueue.length === 0) {
      return;
    }
  
    this.LiveMessage = this.liveMessageQueue.shift()!;
    setTimeout(() => {
      this.LiveMessage = '';
      this.processLiveMessages(); 
    }, 3000);
  }
}
