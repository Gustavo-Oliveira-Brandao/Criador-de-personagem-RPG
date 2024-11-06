import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTabContainerComponent } from './multi-tab-container.component';

describe('MultiTabContainerComponent', () => {
  let component: MultiTabContainerComponent;
  let fixture: ComponentFixture<MultiTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiTabContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
