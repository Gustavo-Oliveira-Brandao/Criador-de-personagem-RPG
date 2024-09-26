import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsActionsComponent } from './skills-actions.component';

describe('SkillsActionsComponent', () => {
  let component: SkillsActionsComponent;
  let fixture: ComponentFixture<SkillsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
