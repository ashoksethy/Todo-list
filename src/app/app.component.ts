import { Component } from '@angular/core';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component'; 

@Component({
  // declarations: [
  //   AppComponent,
  //   AddTodoComponent // Declare your new component here
  // ],
  imports: [AddTodoComponent], // Import the standalone component here
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
