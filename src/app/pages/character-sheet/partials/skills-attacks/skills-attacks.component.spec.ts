import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAttacksComponent } from './skills-attacks.component';

describe('SkillsActionsComponent', () => {
  let component: SkillsAttacksComponent;
  let fixture: ComponentFixture<SkillsAttacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsAttacksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsAttacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
