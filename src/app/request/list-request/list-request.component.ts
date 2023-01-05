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
    { field: 'subCategory', sort: 'asc'},
    {field: 'reqStatus', sort: 'asc'},
    {field: 'description', sort: 'asc'},
    {field: 'assignedTo.email', sort: 'asc'}
  ]

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
  length = 0;
  page = 1; 
  itemsPerPage = 5 ;

  constructor(private requestService : RequestService) {    
  }

  ngOnInit(): void { 
    this.requestService.getRequests().subscribe((res) => {
      this.requestList = res;
      this.length = this.requestList.length;
    });
    this.onChangeTable(this.config);
  }

  public changePage(page:any, data:Array<any> = this.requestList):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = '';
    let sort:string = '';

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.requestList, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}
