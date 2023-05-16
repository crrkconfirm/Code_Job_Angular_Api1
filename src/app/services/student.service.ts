import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from "../models/student";
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentApiUrl = "http://localhost:5004/Student";

  constructor(private httpClient: HttpClient) { }

  public getStudents(): Observable<Student[]> 
  {
    return this.httpClient.get<Student[]>(this.studentApiUrl);
  }
}