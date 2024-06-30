import { Component, TemplateRef, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskItem } from '../../models/task-item';


@Component({
  selector: 'app-add-task-modal',
  //standalone: true,
  //imports: [],
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.scss'
})
export class AddTaskModalComponent {
  constructor(private modalService: NgbModal,public activeModal: NgbActiveModal) {}
  
  taskForm!: FormGroup<any>;

  ngOnInit(): void {
    // Initialize the form group with form controls
    this.taskForm = new FormGroup({
      taskId: new FormControl(''),
      taskName: new FormControl(''),
      taskDesc: new FormControl(''),
      dueDate : new FormControl('')
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      // Handle form submission
    }
  }
  closeResult='';

  



  /*open(content:TemplateRef<any>){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }*/

  /*private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}*/
}
