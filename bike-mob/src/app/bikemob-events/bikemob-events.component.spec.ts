import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikemobEventsComponent } from './bikemob-events.component';

describe('BikemobEventsComponent', () => {
  let component: BikemobEventsComponent;
  let fixture: ComponentFixture<BikemobEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikemobEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikemobEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
