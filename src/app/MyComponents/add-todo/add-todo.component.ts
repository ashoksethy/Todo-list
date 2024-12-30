import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
// import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
  standalone: true, // This indicates a standalone component
})
export class AddTodoComponent {
  todos: Todo[] = [];
  title: string = ''; // Define title
  desc: string = ''; // Define description
  @Output() todoAdd: EventEmitter<Todo>= new EventEmitter();
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
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1); //2nd parameter means remove one item only
  }
  onSubmit() {
    console.log('Title:', this.title, 'Description:', this.desc);
    // Create the new Todo
    const todo = {
        sno: this.todos.length > 0 ? this.todos[0].sno + 1 : 1, // Increment sno based on the first item's sno
        title: this.title,
        desc: this.desc,
        active: true
    };
    this.todos.unshift(todo); // Add to the beginning of the list
    this.todoAdd.emit(todo); // Emit the new Todo

    // Reset the form fields
    this.title = '';
    this.desc = '';
}

}
