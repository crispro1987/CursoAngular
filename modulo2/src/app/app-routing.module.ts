import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "pagina1", component: Pagina1Component },
  { path: "pagina2", component: Pagina2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
