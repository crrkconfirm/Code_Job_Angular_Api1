import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from "../models/student";
  
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = "http://localhost:5004/Student";
  constructor(private httpClient: HttpClient) { }

  getStudents(){
    return this.httpClient.get<Student[]>(this.url);
  }
  
}