import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikemobFooterComponent } from './bikemob-footer.component';

describe('BikemobFooterComponent', () => {
  let component: BikemobFooterComponent;
  let fixture: ComponentFixture<BikemobFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikemobFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikemobFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
