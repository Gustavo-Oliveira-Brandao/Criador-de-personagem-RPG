import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularCardComponent } from './modular-card.component';

describe('ModularCardComponent', () => {
  let component: ModularCardComponent;
  let fixture: ComponentFixture<ModularCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModularCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModularCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
