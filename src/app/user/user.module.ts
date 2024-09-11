import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { RequestModule } from '../request/request.module';
import { ChartModule } from 'primeng/chart';
import { NgChartsModule } from 'ng2-charts';
import {TableModule } from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [    
    UserRoutingModule,    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RequestModule,
    ChartModule,
NgChartsModule ,
  TableModule,
  ToastModule,
  CalendarModule,
  MultiSelectModule,
  ContextMenuModule,
  SliderModule,
  DialogModule,
  ButtonModule,
  DropdownModule,
  ProgressBarModule,
  InputTextModule
 ],
  providers: [
    
  ],  
})
export class UserModule { }
