import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './common/component/side-bar/side-bar.component';
import { HeaderComponent } from './common/component/header/header.component';
import { LoginComponent } from './common/component/login/login.component';
import { AuthGuard } from './common/gaurds/auth.guards';
import { AdminModule } from './admin/admin.module';
import { RequestModule } from './request/request.module';
import { UserModule } from './user/user.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthenticationService } from './common/services/authentication.service';
import { AgGridModule } from 'ag-grid-angular';
import { JwtInterceptor } from './common/util/jwt-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    LoginComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
    AdminModule,
    RequestModule,
    UserModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [
    AuthGuard,
    HttpClient,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]  
})
export class AppModule { }
