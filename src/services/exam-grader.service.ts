import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamGraderService {

  url = 'https://exam-grader.herokuapp.com/api/grade/placement-test';
  
  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/vnd.openxmlformats-officedocument.documentml.document', 'Access-Control-Allow-Origin': '*'})
  }

  createGrade(grade: any): Observable<Blob> {    
    return this.httpClient.post(this.url, grade, { responseType: 'blob' });
  }
}
