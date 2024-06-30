import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskModalComponent } from "../components/add-task-modal/add-task-modal.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    //standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    //imports: [RouterOutlet, AddTaskModalComponent]
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}

  title = 'ProductivityAppClient';

  openTaskModal(): void{
    this.modalService.open(AddTaskModalComponent);
  }
}
