import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'navbar', loadChildren: () => import('./modules/navbar/navbar.module').then(d => d.NavbarModule) },
  { path: 'table', loadChildren: () => import('./modules/table/table.module').then(d => d.TableModule) },
  { path: '', loadChildren: () => import('./modules/form/form.module').then(d => d.FormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
