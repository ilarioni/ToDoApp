import { TodoItem } from "./todoItem";

export class TodoList {
    constructor(public user: string, private todoItems: TodoItem[] = []) {
        // no statement required 
    }
    get itemsArray(): readonly TodoItem[] {
        return this.todoItems;
    }
    addItemToArray(taskValue: string) {
        this.todoItems.push(new TodoItem(taskValue));
    }
}