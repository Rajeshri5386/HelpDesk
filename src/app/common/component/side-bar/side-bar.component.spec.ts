import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SideBarComponent
      ],
    }).compileComponents();
  });

  it('should create the side bar component', () => {
    const fixture = TestBed.createComponent(SideBarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
