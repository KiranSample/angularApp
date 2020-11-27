import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<any>(environment.baseUrl + "/toDoList");
  }

  getTodo(id) {
    return this.http.get<any>(environment.baseUrl + "/toDoList/" + id);
  }

  createTodo(body) {
    return this.http.post<any>(environment.baseUrl + "/toDoList", body);
  }

  updateTodo(body) {
    return this.http.put<any>(environment.baseUrl + "/toDoList", body);
  }

  deleteTodo(id) {
    return this.http.delete<any>(environment.baseUrl + "/toDoList/" + id);
  }
}
