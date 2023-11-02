// Name: Jocelyn Dupuis
// File: sign-in.guard.ts
// Date: 11/02/2023
// Description: TS for sign-in guard - Exercise 3.4

//imports
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  router: any;

  // create constructor using router
  constructor(private route: Router) {

  }

  // canActivate route guard
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //variable for isLoggedIn and assigned query params return value
      let isLoggedIn = next.queryParams.isLoggedIn;

      // if true
      if(isLoggedIn) {
        return true;
      }else{
        // if false navigates users to sign-in page
        this.router.navigate(['/']);
        return false
      }

  }

}
