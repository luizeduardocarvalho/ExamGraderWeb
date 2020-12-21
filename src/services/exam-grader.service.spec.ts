import { TestBed } from '@angular/core/testing';

import { ExamGraderService } from './exam-grader.service';

describe('ExamGraderService', () => {
  let service: ExamGraderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamGraderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
