import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { ListRestaurentComponent } from './list-restaurent/list-restaurent.component';
import { LoginRestaurentComponent } from './login-restaurent/login-restaurent.component';
import { RegisterRestaurentComponent } from './register-restaurent/register-restaurent.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddRestaurentComponent,
    UpdateRestaurentComponent,
    ListRestaurentComponent,
    LoginRestaurentComponent,
    RegisterRestaurentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
