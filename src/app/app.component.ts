import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student.service';
import { Student } from "./models/student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Code_Job_Angular_Api1';
  students = Array<Student>();

  constructor(private studentService: StudentService) {
    this.studentService.getStudents().subscribe(response => { this.students = response; });
  }
}
