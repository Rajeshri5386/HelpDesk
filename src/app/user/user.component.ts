import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'  
})
export class UserComponent implements OnInit {

  @ViewChild('closeCreateModal',  { static: true }) closeCreateModal: ElementRef | undefined;
  requestList = [];
 
  category = [ 
    { name : 'Humman resource' , icon : "fa-user"},
    { name : 'Finance' , icon : "fa-file"}, { name : 'Computers and Networks' , icon : 'fa-laptop'},
    { name:  'Information technology' , icon: 'fa-wifi'}];
   subCategory = [
    'Bonus',
    'Refral',
    'Appraisal'  
  ]

  constructor(private requestService: RequestService) {

  }

  ngOnInit(): void {
    this.loadRequest();  
  }

  requestSaved() {
    this.closeCreateModal?.nativeElement.click();
  }

  loadRequest() {
    this.requestService.getRequests().subscribe((res) => {
      this.requestList = res;
    });
  }
  
}
