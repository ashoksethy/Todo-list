import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../../src/app/Todo';
@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined;
  onClick(){
    console.log("Delete has been clilcked");
  }
}
