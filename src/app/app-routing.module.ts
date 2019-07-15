import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '' ,  redirectTo: '/cards', pathMatch: 'full' },
  { path: 'client' , loadChildren: './client/client.module#ClientModule'},
  { path: 'cards' , loadChildren: './products/products.module#ProductsModule'},
  { path: '"**' , redirectTo: '/cards'  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
