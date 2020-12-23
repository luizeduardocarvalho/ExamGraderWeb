import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExamGraderService } from '../../services/exam-grader.service';

@Component({  
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

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
    this.gradeService.createPetGrade(grades).subscribe(x => {
      var newBlob = new Blob([x], { type: "application/application/vnd.openxmlformats-officedocument.documentml.document" });

      const data = window.URL.createObjectURL(newBlob);

      var link = document.createElement('a');
      link.href = data;
      link.download = `${grades.StudentName}.docx`;
      // this is necessary as link.click() does not work on the latest firefox
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    });
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }

}
