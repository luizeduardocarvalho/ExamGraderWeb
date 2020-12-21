import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PlacementGrade } from '../../models/placement-grade';
import { ExamGraderService } from '../../services/exam-grader.service';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.css']
})
export class PlacementTestComponent implements OnInit {
  
  gradeForm;

  constructor(private formBuilder: FormBuilder, private gradeService: ExamGraderService) {
    this.gradeForm = this.formBuilder.group({
      StudentName: '',
      Reading: '',
      Listening: '',
      Writing: '',
      Speaking: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmit(grades) {
    //const grade = new PlacementGrade(grades.name, Number(grades.reading), Number(grades.writing), Number(grades.listening), Number(grades.speaking));
    this.gradeService.createGrade(grades).subscribe(response => this.downLoadFile(response, "application/vnd.openxmlformats-officedocument.documentml.document"));
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert( 'Please disable your Pop-up blocker and try again.');
    }
}

}
