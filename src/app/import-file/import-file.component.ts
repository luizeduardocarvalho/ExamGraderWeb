import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.css'],
})
export class ImportFileComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  myForm = new FormGroup({
    file: new FormControl(''),
  });

  fileToUpload: File = null;

  onFileSelect(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);

    var httpOptions = {
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/octet-stream',
        'Access-Control-Allow-Origin': '*',
      }),
    };

    this.http
      .post(
        'https://exam-grader.herokuapp.com/upload-file',
        this.fileToUpload,
        { responseType: 'blob', headers: httpOptions.headers }
      )
      .subscribe((res: Blob) => {
        saveAs(res, 'results.zip');
      });
  }
}
