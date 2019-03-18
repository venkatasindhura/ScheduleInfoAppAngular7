import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class TodoBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http: HttpClient) { }
  executeTodoBeanService() {
return this.http.get<TodoBean>('http://localhost:8083/todo-bean');
    console.log('execute todo bean service');
  }
  executeTodoBeanServicewithPathVariable( name: string) {
    return this.http.get<TodoBean>(`http://localhost:8083/todo-bean/path-variable/${name}`);
  }
}
