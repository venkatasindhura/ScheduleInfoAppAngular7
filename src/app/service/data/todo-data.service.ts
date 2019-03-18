import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoBean } from './welcome-data.service';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  constructor(private http: HttpClient) { }
  retrieveAllTodos(username: any) {
    return this.http.get<Todo[]>(`http://localhost:8083/users/${username}/todos`);
  }
  deleteTodo(username: any, id: any) {
    return this.http.delete(`http://localhost:8083/users/${username}/todos/${id}`);
  }
  retrieveTodo(username: any, id: any) {
    return this.http.get<Todo>(`http://localhost:8083/users/${username}/todos/${id}`);
  }
  updateTodo(username: any, id: any, todo: any) {
    return this.http.put<Todo>(`http://localhost:8083/users/${username}/todos/${id}`, todo);
  }
  createTodo(username: any, todo: any) {
    return this.http.post(`http://localhost:8083/users/${username}/todos`, todo);
  }


}
