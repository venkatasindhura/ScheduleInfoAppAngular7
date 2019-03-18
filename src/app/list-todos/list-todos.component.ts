import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(

      public id: number,
      public description: string,
      public done: boolean,
      public targetDate: Date,
      // public doneby: string
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  message: String;
    // new Todo(1, 'Learn to Dance', 'Yes', new Date(),'sindhu'),
    // new Todo(2, 'Fill nitya daycare apllication', 'No', new Date(),'kiran'),
    // new Todo(3, 'Send grocery list', 'Yes', new Date(), 'sindhu'),
    // new Todo(4, 'Get veggies today', 'Yes', new Date(), 'kiran')

    // { id : 1, description : 'Learn to dance' },
    // { id : 2 ,description :'Fill nitya daycare apllication'},
    // {id : 3, description : 'Send grocery list'}
 todoService: any;

  constructor(private service: TodoDataService,
    private router: Router) { }

  ngOnInit() {
// tslint:disable-next-line: semicolon
     this.refreshTodos();
  }
  refreshTodos() {
    this.service.retrieveAllTodos('todoapp').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }
deleteTodo(id: any) {
  console.log(`delete todo ${id}`);
  this.service.deleteTodo('todoapp', id).subscribe(
    response => {
      console.log(response);
      this.message = `Delete of Todo ${id} successful`;
      this.refreshTodos();
    }
  );
}
updateTodo(id: any) {
  console.log(`update todo ${id}`);
  this.router.navigate (['todos', id]);
}
addTodo() {
this.router.navigate(['todos', -1]);
}

}
