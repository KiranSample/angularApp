import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo/todo.component";
import { DetailComponent } from "./detail/detail.component";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule  } from "@angular/material/checkbox";
import { MatFormFieldModule  } from "@angular/material/form-field";
import { MatInputModule  } from "@angular/material/input";
import { MatSnackBarModule  } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [TodoComponent, DetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
    TodoRoutingModule,
  ],
})
export class TodoModule {}
