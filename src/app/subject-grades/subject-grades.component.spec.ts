import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectGradesComponent } from './subject-grades.component';

describe('SubjectGradesComponent', () => {
  let component: SubjectGradesComponent;
  let fixture: ComponentFixture<SubjectGradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectGradesComponent]
    });
    fixture = TestBed.createComponent(SubjectGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
