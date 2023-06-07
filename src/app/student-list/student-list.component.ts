import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students = [
    { id: 1, firstName: 'Przemek', lastName: 'Nowak' },
    { id: 2, firstName: 'Joanna', lastName: 'Brzdąc' },
    { id: 3, firstName: 'Stefan', lastName: 'Brzęczyszczykiewicz' }
  ];

  selectedStudentId: number | null = null;

  selectStudent(studentId: number): void {
    this.selectedStudentId = studentId;
  }
}
