import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedTabComponent } from './expanded-tab.component';

describe('ExpandedTabComponent', () => {
  let component: ExpandedTabComponent;
  let fixture: ComponentFixture<ExpandedTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandedTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
