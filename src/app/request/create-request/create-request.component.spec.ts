import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { of } from 'rxjs';
import { RequestService } from '../request.service';
import { CreateRequestComponent } from './create-request.component'

describe('CreateRequestComponent', () => {
  let requestService: RequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NgSelectModule,
        HttpClientTestingModule
      ],
      declarations: [
        CreateRequestComponent
      ],
      providers: [
        HttpClientModule,
        RequestService
      ]
    }).compileComponents();
  });

  it('should create the create request component', () => {
    const fixture = TestBed.createComponent(CreateRequestComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('CreateRequest function should create new request and close modal', () => {
    const fixture = TestBed.createComponent(CreateRequestComponent);
    const comp = fixture.componentInstance;
    requestService = TestBed.get(RequestService);
    spyOn(requestService, "addrequest").and.returnValue(of({}));
    comp.createRequest();
    expect(requestService.addrequest).toHaveBeenCalled();
  });
  
});
