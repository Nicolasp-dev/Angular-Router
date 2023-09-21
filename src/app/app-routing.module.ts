import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  {
    path: "course",
    loadChildren: () =>
      import("./courses/courses.module").then((module) => module.CoursesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
