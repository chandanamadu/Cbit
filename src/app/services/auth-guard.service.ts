import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
	const url: string = state.url;
	return this.checkAuthenticated(url, route);
  }

  private checkAuthenticated(url: string, route: ActivatedRouteSnapshot): boolean {
	if (this.authService.getIsAuthenticated()) {
		return true;
	}
	this.router.navigate([url.split('/')[1], 'login']);
	return false;
  }
}
