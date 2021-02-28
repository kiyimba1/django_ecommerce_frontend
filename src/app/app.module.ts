import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from './client/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';


// @ts-ignore
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ProductListComponent } from './client/product-list/product-list.component';
import {httpInterceptorProviders} from './interceptors';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {appInitializer} from './services/app-initializer';


@NgModule({
  declarations: [
    NavComponent,
    LoginComponent,
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatChipsModule
  ],
  providers: [
    // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService]},
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
