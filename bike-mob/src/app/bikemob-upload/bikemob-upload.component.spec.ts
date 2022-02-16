import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikemobUploadComponent } from './bikemob-upload.component';

describe('BikemobUploadComponent', () => {
  let component: BikemobUploadComponent;
  let fixture: ComponentFixture<BikemobUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikemobUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikemobUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
