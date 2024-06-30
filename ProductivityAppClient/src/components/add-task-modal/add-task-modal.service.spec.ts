import { TestBed } from '@angular/core/testing';

import { AddTaskModalService } from './add-task-modal.service';

describe('AddTaskModalService', () => {
  let service: AddTaskModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTaskModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
