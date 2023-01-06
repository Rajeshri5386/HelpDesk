import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { compileClassMetadata } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthenticationService } from './common/services/authentication.service';
import { RequestModule } from './request/request.module';

describe('AppComponent', () => {

  let router : Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        RequestModule
      ],
      declarations: [
        AppComponent        
      ],
      providers: [
        HttpClientModule,
        AuthenticationService        
      ]
    }).compileComponents();
    router = TestBed.get(Router);
  });

  it('should create the app component', (done: DoneFn) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    done();
  });  

  it('Logout function should log out user', () => {
    spyOn(router, "navigate");    
    const fixture = TestBed.createComponent(AppComponent);
    const comp = fixture.componentInstance;
    comp.logout();    
    expect(comp.isLoggedIn).toBeFalse();
  });  
});
