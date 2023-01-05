import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListRequestComponent } from './list-request/list-request.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { RequestService } from './request.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatTableModule } from '@angular/material/table';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    ListRequestComponent,
    CreateRequestComponent,    
  ],
  imports: [      
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatTableModule,
    AgGridModule
  ],
  providers: [
    RequestService,    
  ],
  exports: [
    ListRequestComponent,
    CreateRequestComponent,    
  ]
})
export class RequestModule { }
