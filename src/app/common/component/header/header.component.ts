import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html' ,
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  username: string;
  Itext: any[] = ['i','n','t'];
  constructor(private authService: AuthenticationService) {

  }
 ngOnInit(): void {
   const user = this.authService.getProfile();
   this.username = user.username;
 }

 
 changeref() {
  this.Itext[0] = this.Itext[1];
 }

 changeValue() {
  this.Itext = ['value is changes'];
 }
}
