import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}


  canActivate():boolean{
    let usuario = localStorage.getItem('usuario');
    if(usuario){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
