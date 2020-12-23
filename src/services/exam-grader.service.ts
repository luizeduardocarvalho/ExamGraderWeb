import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamGraderService {

  baseUrl = 'https://exam-grader.herokuapp.com/api/grade/';
  
  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/vnd.openxmlformats-officedocument.documentml.document', 'Access-Control-Allow-Origin': '*'})
  }

  createPlacementTestGrade(grade: any): Observable<Blob> {
    const url =  this.baseUrl + 'placement-test';
    return this.httpClient.post(url, grade, { responseType: 'blob' });
  }

  createPetGrade(grade: any): Observable<Blob> {
    const url =  this.baseUrl + 'pet';
    return this.httpClient.post(url, grade, { responseType: 'blob' });
  }

  createFceGrade(grade: any): Observable<Blob> {
    const url =  this.baseUrl + 'fce';
    return this.httpClient.post(url, grade, { responseType: 'blob' });
  }

  createCaeGrade(grade: any): Observable<Blob> {
    const url =  this.baseUrl + 'cae';
    return this.httpClient.post(url, grade, { responseType: 'blob' });
  }
}
