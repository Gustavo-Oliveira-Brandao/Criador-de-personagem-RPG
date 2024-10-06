import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularBtnComponent } from './modular-btn.component';

describe('ModularBtnComponent', () => {
  let component: ModularBtnComponent;
  let fixture: ComponentFixture<ModularBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModularBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModularBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
