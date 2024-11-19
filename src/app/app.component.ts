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

  public Complete(completedItem: Item) {
    const currentArray = this.List$.getValue();

    const updatedArray = currentArray.map(item =>
      item === completedItem ? { content: item.content, isCompleted: true } : item
    );
  
    this.List$.next(updatedArray);
  }

  public Delete(deletedItem: Item) {
    const currentArray = this.List$.value;
    const updatedArray = currentArray.filter(item => item.content !== deletedItem.content);
    this.List$.next(updatedArray);
  }
}
