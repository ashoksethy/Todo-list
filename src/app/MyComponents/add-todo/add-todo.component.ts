import { Component } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-add-todo',
  imports: [],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
  standalone: true, // This indicates a standalone component
})
export class AddTodoComponent {
  todos: Todo[] = [];

}
