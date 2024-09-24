import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryStatusComponent } from './secondary-status.component';

describe('SecondaryStatusComponent', () => {
  let component: SecondaryStatusComponent;
  let fixture: ComponentFixture<SecondaryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
