import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEditTabComponent } from './details-edit-tab.component';

describe('DetailsEditTabComponent', () => {
  let component: DetailsEditTabComponent;
  let fixture: ComponentFixture<DetailsEditTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsEditTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEditTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
