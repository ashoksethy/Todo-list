import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
// import { isPlatformBrowser } from '@angular/common';
// import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  standalone: true, // This indicates a standalone component
})
export class TodoComponent {
  localItem : string | null = "";
  todos: Todo[] = [];
  localStorage: string | null = "";
  
  constructor()
  {
    if (typeof window !== 'undefined' && localStorage) {
      this.localItem = localStorage.getItem("todos") ?? "[]"; // Fallback to an empty array string
      this.todos = JSON.parse(this.localItem);
    } else {
      this.todos = []; // Default value for non-browser environments
    }
    
  }
  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1); //2nd parameter means remove one item only
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo); //2nd parameter means remove one item only
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
