import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../../src/app/Todo';
// import { EventEmitter } from 'node:stream';
@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo>= new EventEmitter();

  constructor(){ };
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Delete has been clilcked");
  }
}
