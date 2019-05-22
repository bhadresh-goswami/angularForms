import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactFormComponent } from "./react-form/react-form.component";
import { TempateFormComponent } from './tempate-form/tempate-form.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: "reactive",
    component: ReactFormComponent
  },
  {
    path: "template",
    component: TempateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
