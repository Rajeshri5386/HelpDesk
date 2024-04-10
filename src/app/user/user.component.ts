import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'   
})
export class UserComponent implements OnInit {

  @ViewChild('closeCreateModal',  { static: true }) closeCreateModal: ElementRef | undefined;
  
 
  category = [ 
    { name : 'Humman resource' , icon : "fa-user", value : "$10,000", change: 10},
    { name : 'Finance' , icon : "fa-file", change: 5, value: 300},
    { name : 'Computers and Networks' , icon : 'fa-laptop', value : "1000", change: -1 },
    { name:  'Information technology' , icon: 'fa-wifi' , value: 500 , change: -10}
  ];


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
      
    });


  }
  
}
