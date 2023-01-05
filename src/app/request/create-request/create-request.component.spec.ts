import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { CreateRequestComponent } from './create-request.component'

describe('CreateRequestComponent', () => {
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
        HttpClientModule
      ]
    }).compileComponents();
  });

  it('should create the create request component', () => {
    const fixture = TestBed.createComponent(CreateRequestComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
