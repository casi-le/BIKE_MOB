import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikemobInfoComponent } from './bikemob-info.component';

describe('BikemobInfoComponent', () => {
  let component: BikemobInfoComponent;
  let fixture: ComponentFixture<BikemobInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikemobInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikemobInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
