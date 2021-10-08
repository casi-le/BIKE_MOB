import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikemobFaqComponent } from './bikemob-faq.component';

describe('BikemobFaqComponent', () => {
  let component: BikemobFaqComponent;
  let fixture: ComponentFixture<BikemobFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikemobFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikemobFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
