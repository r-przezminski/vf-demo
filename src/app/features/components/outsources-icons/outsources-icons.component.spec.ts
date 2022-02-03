import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcesIconsComponent } from './outsources-icons.component';

describe('OutsourcesIconsComponent', () => {
  let component: OutsourcesIconsComponent;
  let fixture: ComponentFixture<OutsourcesIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsourcesIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsourcesIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
