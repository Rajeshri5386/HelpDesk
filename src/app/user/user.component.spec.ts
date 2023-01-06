import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { observable, of } from 'rxjs';
import { RequestModule } from '../request/request.module';
import { RequestService } from '../request/request.service';
import { UserComponent } from './user.component';

describe('UserComponent', () => {

  let requestService: RequestService;
  let closeCreateModal: ElementRef;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        RequestModule,
        CommonModule        
      ],
      declarations: [
        UserComponent        
      ],
      providers: [
        HttpClientModule,       
        RequestService
      ]
    }).compileComponents();
  });

  it('should create the user component', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('loadRequest should get user request ', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const comp = fixture.componentInstance;
    requestService = TestBed.get(RequestService);
    spyOn(requestService, 'getRequests').and.returnValue(of([
      { _id: '6gger7387394', category: 'HR' }
    ]));
    comp.loadRequest();
    expect(comp.requestList.length).toBeGreaterThan(0);
  });

});
