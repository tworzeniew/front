import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './mainModule/main-component/main-component.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AverageGradeComponent } from './average-grade/average-grade.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SubjectGradesComponent } from './subject-grades/subject-grades.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    BookDetailComponent,
    CarDetailComponent,
    AverageGradeComponent,
    StudentListComponent,
    SubjectGradesComponent,
    ContactComponent,
    ClientsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
