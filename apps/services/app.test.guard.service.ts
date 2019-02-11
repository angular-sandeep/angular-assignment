import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AppGuardService implements CanActivate {
  constructor(private _router: Router) {}

  //
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("canActivate");

    alert("route is protected");

    this._router.navigate(["error"]);
    return false;
  }
}
