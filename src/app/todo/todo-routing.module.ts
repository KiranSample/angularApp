import { DetailComponent } from "./detail/detail.component";
import { TodoComponent } from "./todo/todo.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
  },
  {
    path: "create",
    component: DetailComponent,
    data: {
      create: true,
    },
  },
  {
    path: "view/:id",
    component: DetailComponent,
    data: {
      create: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
