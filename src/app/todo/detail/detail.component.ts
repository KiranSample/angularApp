import { TodoService } from "./../todo.service";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  isCreateScreen: boolean;
  formGroup: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: TodoService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    activatedRoute.data.subscribe((data) => {
      this.isCreateScreen = data["create"];
    });
    activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getTodo(params["id"]);
      }
    });
  }

  ngOnInit() {
    this.formGroup = new FormBuilder().group({
      taskName: new FormControl(null, [Validators.required]),
      taskDescription: new FormControl(null, []),
      completed: false,
      id:null
    });
  }

  getTodo(id) {
    this.service.getTodo(id).subscribe((response) => {
      this.formGroup.patchValue(response);
    });
  }

  createTodo() {
    if (this.formGroup.valid) {
      this.service.createTodo(this.formGroup.value).subscribe((response) => {
        if (response) {
          this.snackBar.open("Created Successfully!", "", {
            duration: 2000,
          });
          this.router.navigate(["/todo"]);
        }
      });
    }
  }

  updateTodo() {
    if (this.formGroup.valid) {
      this.service.updateTodo(this.formGroup.value).subscribe((response) => {
        if (response) {
          this.snackBar.open("Updated Successfully!", "", {
            duration: 2000,
          });
          this.router.navigate(["/todo"]);
        }
      });
    }
  }

  onSubmit() {
    if (this.isCreateScreen) {
      this.createTodo();
    } else {
      this.updateTodo();
    }
  }
}
