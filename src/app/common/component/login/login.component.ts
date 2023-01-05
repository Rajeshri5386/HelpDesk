import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'  
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  isUnauthorized: boolean = false;
  constructor(   
    private authService: AuthenticationService,
    private router: Router
  ) {}

  
  get username(): AbstractControl | null {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ]),
    });
  }
 
  login() {
    const userDetails = this.loginForm.value;
    this.authService.login(userDetails).subscribe((res) => {
      this.authService.setToken(res.token);
      const userRole = this.authService.getRole()
      if(userRole === 'user') {
        this.authService.isUserLogged.next(true);
        this.router.navigate(['/user']);
      } else if(userRole === 'admin') {
        this.authService.isUserLogged.next(true);
        this.router.navigate(['/admin']);
      } else {
        this.authService.isUserLogged.next(false);
        this.isUnauthorized = true
      }      
    });
  }
}
