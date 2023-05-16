import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Student } from "../models/student";
import { Observable, catchError, retry, throwError  } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentApiUrl = "http://localhost:5004/Student";

  constructor(private httpClient: HttpClient) { }

  public getStudents(): Observable<Student[]> 
  {
    return this.httpClient.get<Student[]>(this.studentApiUrl).pipe( retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}