import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { HomeComponent } from './home/home.component';
import { ListRestaurentComponent } from './list-restaurent/list-restaurent.component';
import { LoginRestaurentComponent } from './login-restaurent/login-restaurent.component';
import { RegisterRestaurentComponent } from './register-restaurent/register-restaurent.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';


const routes: Routes = [
  {component:HomeComponent, path:''},
  {component:UpdateRestaurentComponent, path:'update'},
  {component:AddRestaurentComponent, path:'add'},
  {component:ListRestaurentComponent, path:'list'},
  {component:LoginRestaurentComponent, path:'login'},
  {component:RegisterRestaurentComponent, path:'register'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
