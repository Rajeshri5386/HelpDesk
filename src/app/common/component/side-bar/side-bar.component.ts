import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  category = [ 
    { name : 'Humman resource' , icon : "fa-user"},
    { name : 'Finance' , icon : "fa-file"}, { name : 'Computers and Networks' , icon : 'fa-laptop'},
    { name:  'Information technology' , icon: 'fa-wifi'}];
}
