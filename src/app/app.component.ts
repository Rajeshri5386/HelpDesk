import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './common/services/authentication.service';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent implements OnInit {

  selectedCategory: any = {};
  selectedSubCategory: any = {};
  description = '';
  isLoggedIn = false;
  @ViewChild('closeCreateModal',  { static: true }) closeCreateModal: ElementRef | undefined;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.isUserLogged.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
     });
  }

  ngOnInit(): void {  
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.closeCreateModal?.nativeElement.click();
    this.authService.logout();    
    this.router.navigate(['/login']);    
  }
}
