//Name: Jocelyn Dupuis
//File: app.module.ts
//Date: 11/30/2023
//Description: TS file for sign-in guard

//import statements
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
//exports
export class SignInGuard implements CanActivate {
  //constructor to import over router and cookie service
  constructor(private router: Router, private cookieService: CookieService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //retrieves cookie from user browser
      const sessionUser = this.cookieService.get('session_user');
      //check if theres something being returned from the session user
      if (sessionUser) {
        //if theres a session user
        return true;
        //if null navigates users back to sign in
      } else {
        this.router.navigate(['/session/sign-in']);
        return false;
      }
  }

}
