import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikemobHomeComponent } from './bikemob-home.component';

describe('BikemobHomeComponent', () => {
  let component: BikemobHomeComponent;
  let fixture: ComponentFixture<BikemobHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikemobHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikemobHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
