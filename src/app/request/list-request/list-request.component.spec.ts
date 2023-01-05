import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AgGridModule } from 'ag-grid-angular';
import { RequestService } from '../request.service';
import { ListRequestComponent } from './list-request.component';

describe('ListRequestComponent', () => {
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
});
