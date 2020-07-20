import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, CanActivate} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(route.paramMap.get('id') === '1') {
      return true;
    } else {
      return false;
    }
  }
}
