import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlacementGrade } from '../models/placement-grade';

@Injectable({
  providedIn: 'root'
})
export class ExamGraderService {

  url = 'http://localhost:3000/api/grade/pet';
  
  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/vnd.openxmlformats-officedocument.documentml.document', 'Access-Control-Allow-Origin': '*'})
  }

  createGrade(grade: any): any {
    console.log(grade);
    return this.httpClient.post(this.url, grade, this.httpOptions);
  }
}
