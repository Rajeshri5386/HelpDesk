import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { RequestModule } from '../request/request.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [    
    UserRoutingModule,    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RequestModule
  ],
  providers: [
    
  ],  
})
export class UserModule { }
