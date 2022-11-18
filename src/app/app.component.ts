import { Component } from '@angular/core';

import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Ilarioni", [
    new TodoItem("Go for shopping", true),
    new TodoItem("Go for run"),
    new TodoItem("Check cinema tickets"),
    new TodoItem("Buy grocery food", true)
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.itemsArray.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.itemsArray.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem: string) {
    if (newItem !="") {
      this.list.addItemToArray(newItem)
    }
  }

  showComplete: boolean = false;

}
