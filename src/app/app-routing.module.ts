import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRouting } from "./app-routing";
import { HomeComponent } from "./screens/home/home.component";
import { PageNotFoundComponent } from "./screens/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: AppRouting.PATH.HOME,
    pathMatch: "full",
  },
  {
    path: AppRouting.PATH.HOME,
    pathMatch: "full",
    component: HomeComponent,
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
