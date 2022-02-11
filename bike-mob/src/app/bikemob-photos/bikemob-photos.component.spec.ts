import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikemobPhotosComponent } from './bikemob-photos.component';

describe('BikemobPhotosComponent', () => {
  let component: BikemobPhotosComponent;
  let fixture: ComponentFixture<BikemobPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikemobPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikemobPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
