import { Component } from '@angular/core';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { TodoComponent } from './MyComponents/todos/todos.component'; 
import { CommonModule } from '@angular/common';


@Component({
  imports: [ 
    TodoComponent, 
    CommonModule, 

  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed typo in previous response
  standalone: true,
})
export class AppComponent {
  title = 'ToDo-list';
}
