import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, BehaviorSubject} from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(   
    private router: Router,
    private authService: AuthenticationService
  ) {}
  
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    if (this.authService.isLoggedIn()) {         
      return new BehaviorSubject<boolean>(true);
    } else {      
      this.router.navigate(['/Login']);
      return new BehaviorSubject<boolean>(false);
    }    
  }
}
