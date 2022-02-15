import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikemobRoutesComponent } from './bikemob-routes.component';

describe('BikemobRoutesComponent', () => {
  let component: BikemobRoutesComponent;
  let fixture: ComponentFixture<BikemobRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikemobRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikemobRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
