import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  selectedCategory: any = {};
  selectedSubCategory: any = {};
  description = '';
  
  status = [
    { title : 'New', count : 100},
    { title : 'In progress', count : 100},
    { title : 'On hold', count : 100},
    { title : 'Completed', count : 100}
  ]

  category = [ 
    { name : 'Humman resource' , icon : "fa-user", count : 100},
    { name : 'Finance' , icon : "fa-file", count : 100}, { name : 'Computers and Networks' , icon : 'fa-laptop', count : 100},
    { name:  'Information technology' , icon: 'fa-wifi', count : 100}];
}
