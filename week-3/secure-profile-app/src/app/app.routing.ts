// Name: Jocelyn Dupuis
// File: app.component.ts
// Date: 11/01/2023
// Description: routing for composer application - Exercise 3.3

// imports
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
