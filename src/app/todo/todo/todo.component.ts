import { TodoService } from "./../todo.service";
import { TodoDetail } from "./../todo-interface";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  displayedColumns: string[] = ["id", "taskName", "action"];
  dataSource: TodoDetail[] = [];
  constructor(private service: TodoService, private snackBar: MatSnackBar) {}

  ngOnInit() {this.getList()}

  getList() {
    this.service.getList().subscribe((response) => {
      this.dataSource = response;
    });
  }

  delete(id) {
    this.service.deleteTodo(id).subscribe((response) => {
      if (response) {
        this.snackBar.open("Deleted Successfully!", "", {
          duration: 2000,
        });
        this.getList();
      }
    });
  }
}
