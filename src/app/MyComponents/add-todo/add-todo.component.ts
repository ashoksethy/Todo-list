import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
@Component({
  selector: 'app-add-todo',
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
  standalone: true, // This indicates a standalone component
})
export class AddTodoComponent {
  todos: Todo[] = [];
  constructor(){
    this.todos =[
      {
        sno:1,
        title: "This is title",
        desc: "Description",
        active: true
      },
      {
        sno:2,
        title: "This is title 2",
        desc: "Description",
        active: true
      },
      {
        sno:3,
        title: "This is title 3",
        desc: "Description",
        active: true
      },
    ]
  }
  deleteTodo(todo: Todo){
    console.log(todo);
  }

}
