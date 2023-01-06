import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AgGridModule } from 'ag-grid-angular';
import { of } from 'rxjs';
import { RequestService } from '../request.service';
import { ListRequestComponent } from './list-request.component';

describe('ListRequestComponent', () => {
  let requestService: RequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AgGridModule
      ],
      declarations: [
        ListRequestComponent
      ],
      providers: [
        RequestService,
        HttpClientModule
      ]
    }).compileComponents();
  });

  it('should create the list component', () => {
    const fixture = TestBed.createComponent(ListRequestComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('ngOninit should get requests', () => {
    const fixture = TestBed.createComponent(ListRequestComponent);
    const comp = fixture.componentInstance;
    requestService = TestBed.get(RequestService);
    spyOn(requestService, 'getRequests').and.returnValue(of([
      { _id: '6gger7387394', category: 'HR' }
    ]));
    comp.ngOnInit();
    expect(comp.requestList.length).toBeGreaterThan(0);
  });
});
