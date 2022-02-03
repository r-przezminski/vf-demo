import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicFieldStructureComponent } from './graphic-field-structure.component';

describe('GraphicFieldStructureComponent', () => {
  let component: GraphicFieldStructureComponent;
  let fixture: ComponentFixture<GraphicFieldStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicFieldStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicFieldStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
