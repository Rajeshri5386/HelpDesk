import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RequestModule } from '../request/request.module';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AdminComponent,
    CategoryComponent
  ],
  imports: [    
    AdminRoutingModule,
    NgSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RequestModule
  ],
  providers: [
    
  ],  
})
export class AdminModule { }
