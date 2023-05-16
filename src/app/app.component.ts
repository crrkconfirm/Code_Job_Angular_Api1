import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student.service';
import { Student } from "./models/student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Code_Job_Angular_Api1';
  students:Student[] = [];

  constructor(private service: StudentService) {}
  
  ngOnInit() {
    this.service.getStudents()
      .subscribe(response => {
        this.students = response;
      });
  }
}
