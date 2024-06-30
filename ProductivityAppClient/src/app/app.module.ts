import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskModalComponent } from '../components/add-task-modal/add-task-modal.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskModalComponent
    // Add any other components here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClient
    // Import other necessary modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }