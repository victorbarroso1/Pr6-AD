import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

 canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

   let userAuthenticated = false; // Get the current authentication state from a Service!

   if (userAuthenticated) {
     return true;
   } else {
     this.router.navigate(['./login']);
     return false;
   }
 }
}