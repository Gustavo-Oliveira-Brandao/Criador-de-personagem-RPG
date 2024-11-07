import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsTabComponent } from './talents-tab.component';

describe('TalentsTabComponent', () => {
  let component: TalentsTabComponent;
  let fixture: ComponentFixture<TalentsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
