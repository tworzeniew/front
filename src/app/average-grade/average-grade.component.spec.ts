import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageGradeComponent } from './average-grade.component';

describe('AverageGradeComponent', () => {
  let component: AverageGradeComponent;
  let fixture: ComponentFixture<AverageGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageGradeComponent]
    });
    fixture = TestBed.createComponent(AverageGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
