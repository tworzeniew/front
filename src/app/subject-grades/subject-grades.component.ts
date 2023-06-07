import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject-grades',
  templateUrl: './subject-grades.component.html',
  styleUrls: ['./subject-grades.component.css']
})
export class SubjectGradesComponent {
  @Input() studentId: number | null = null;
  subjectGrades = [
    { studentId: 1, subject: 'Programowanie niskopoziomowe', grade: 4 },
    { studentId: 1, subject: 'Bazy danych NoSQL', grade: 5 },
    { studentId: 2, subject: 'Angielski', grade: 5 },
    { studentId: 2, subject: 'Programowanie uogólnione', grade: 4 },
    { studentId: 3, subject: 'Tworzenie serwisów WEB 2.0', grade: 4 },
    { studentId: 3, subject: 'Wzorce projektowe', grade: 5 }
  ];

  getGrades(): { subject: string, grade: number }[] {
    if (this.studentId) {
      return this.subjectGrades.filter(grade => grade.studentId === this.studentId)
                                .map(grade => ({ subject: grade.subject, grade: grade.grade }));
    }
    return [];
  }
}
