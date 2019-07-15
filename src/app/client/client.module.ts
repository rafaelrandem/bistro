import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientStartComponent } from './client-start/client-start.component';
import {RouterModule, Routes} from '@angular/router';

const route: Routes = [
  {path: '' , component: ClientStartComponent}
]

@NgModule({
  declarations: [ClientStartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ClientModule { }
