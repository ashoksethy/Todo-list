import { Component } from '@angular/core';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { TodoComponent } from "./MyComponents/todos/todos.component"; 

@Component({
  // declarations: [
  //   AppComponent,
  //   AddTodoComponent // Declare your new component here
  // ],
  imports: [TodoComponent], // Import the standalone component here
  providers: [],
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, // Ensure AppComponent is also standalone
})
export class AppComponent {
  title = 'ToDo-list';
//  constructor(){
//   setTimeout(() => {
//     this.title = 'Changed Titile';
//   }, 2000);
//  }
}
