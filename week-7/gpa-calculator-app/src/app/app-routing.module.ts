//Name: Jocelyn Dupuis
//File: app-routing.module.ts
//Date: 11/30/2023
//Description: TS file for app routing module

//import statements
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

//routes array
const routes: Routes = [
  //follows base layout and child components
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ],
    canActivate: [SignInGuard]
  },
  //follows auth layout and child path
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  },
  //redirects user to not found when an invalid url is entered
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//exports
export class AppRoutingModule { }
