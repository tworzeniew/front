import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-average-grade',
  templateUrl: './average-grade.component.html',
  styleUrls: ['./average-grade.component.css']
})
export class AverageGradeComponent {
  @Input() grades: number[] = []; 
  
  calculateAverage(): number {
    if (this.grades.length === 0) {
      return 0;
    }
    
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  addGrade(newGrade: string): void {
    const grade = parseInt(newGrade, 10);
    if (!isNaN(grade)) {
      this.grades.push(grade);
    }
  }
}
