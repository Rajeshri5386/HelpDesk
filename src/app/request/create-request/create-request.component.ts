import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html' 
})
export class CreateRequestComponent {

  selectedCategory: any = {};
  selectedSubCategory: any = {};
  description = '';

  config = {
    notFoundText: 'Custom not found',
    appendTo: 'body',
    bindValue: 'value'
  }
  category = ['HR'];
  subCategory = [
    'Bonus',
    'Refral',
    'Appraisal'
  ]

  @ViewChild('closeCreateModal',  { static: true }) closeCreateModal: ElementRef | undefined;

  constructor(
    private requestService: RequestService    
  ) { }


  createRequest() {
    const request = {
      category: this.selectedCategory,
      subCategory: this.selectedSubCategory,
      description: this.description,
      reqStatus: "New"
    }

    this.requestService.addrequest(request).subscribe((res) => {
        this.closeCreateModal?.nativeElement.click();
    })
  }
}
