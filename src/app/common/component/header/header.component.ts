import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'  
})
export class HeaderComponent implements OnInit {
  username: string;
  constructor(private authService: AuthenticationService) {

  }
 ngOnInit(): void {
   const user = this.authService.getProfile();
   this.username = user.username;
 }

}
