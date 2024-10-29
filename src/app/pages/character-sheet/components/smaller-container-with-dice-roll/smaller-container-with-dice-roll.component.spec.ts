import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallerContainerWithDiceRollComponent } from './smaller-container-with-dice-roll.component';

describe('AttributeComponent', () => {
  let component: SmallerContainerWithDiceRollComponent;
  let fixture: ComponentFixture<SmallerContainerWithDiceRollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallerContainerWithDiceRollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallerContainerWithDiceRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
