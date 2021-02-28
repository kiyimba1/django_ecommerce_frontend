import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {AppComponent} from './app.component';
import {ProductListComponent} from './client/product-list/product-list.component';


const routes: Routes = [
  {path: '', component: ProductListComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
