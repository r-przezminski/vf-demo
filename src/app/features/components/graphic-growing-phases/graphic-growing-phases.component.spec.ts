import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicGrowingPhasesComponent } from './graphic-growing-phases.component';

describe('GraphicGrowingPhasesComponent', () => {
  let component: GraphicGrowingPhasesComponent;
  let fixture: ComponentFixture<GraphicGrowingPhasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicGrowingPhasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicGrowingPhasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
