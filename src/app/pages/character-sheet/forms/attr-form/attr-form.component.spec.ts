import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrFormComponent } from './attr-form.component';

describe('AttrFormComponent', () => {
  let component: AttrFormComponent;
  let fixture: ComponentFixture<AttrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttrFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
