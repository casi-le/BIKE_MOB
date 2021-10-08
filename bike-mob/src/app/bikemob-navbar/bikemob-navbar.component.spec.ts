import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikemobNavbarComponent } from './bikemob-navbar.component';

describe('BikemobNavbarComponent', () => {
  let component: BikemobNavbarComponent;
  let fixture: ComponentFixture<BikemobNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikemobNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikemobNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
