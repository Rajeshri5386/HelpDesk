import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html'  
})
export class ListRequestComponent implements OnInit {

  @Input() headerText: string = '';
  @Input() requestList: any[] = [];
  selectedCategory: any = {};
  selectedSubCategory: any = {};
  description = '';  

  displayedColumns: string[] = ['category', 'subCategory'];
  public rows:Array<any> = [];
  public columns: ColDef[] = [      
    {field: 'category', sort: 'asc'},
    {field: 'subCategory', sort: 'asc'},
    {field: 'reqStatus', sort: 'asc'},
    {field: 'description', sort: 'asc'},
    {field: 'assignedTo.email', sort: 'asc'}
  ]

  constructor(private requestService : RequestService) {    
  }

  ngOnInit(): void { 
    this.requestService.getRequests().subscribe((res) => {
      this.requestList = res;    
    });  
  }
}
