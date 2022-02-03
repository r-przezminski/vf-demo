import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingPhaseDescriptionComponent } from './growing-phase-description.component';

describe('GrowingPhaseDescriptionComponent', () => {
  let component: GrowingPhaseDescriptionComponent;
  let fixture: ComponentFixture<GrowingPhaseDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowingPhaseDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingPhaseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
