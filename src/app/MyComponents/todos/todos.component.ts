import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
// import { isPlatformBrowser } from '@angular/common';
// import { Inject, PLATFORM_ID } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop'; // Import DragDropModule
@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent,     DragDropModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  standalone: true, // This indicates a standalone component
})
export class TodoComponent {
  localItem : string | null = "";
  todos: Todo[] = [];
  // localStorage: string | null = "";
  
  constructor()
  {
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem("todos") || "[]";
      this.todos = JSON.parse(this.localItem);
    } else {
        this.todos = [];
    }
    
  }
  deleteTodo(todo: Todo){
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1); //2nd parameter means remove one item only
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo); //2nd parameter means remove one item only
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);

    // Update 'sno' values after reordering
    this.todos.forEach((todo, index) => {
      todo.sno = index + 1;
    });

    // Save updated array to localStorage
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
