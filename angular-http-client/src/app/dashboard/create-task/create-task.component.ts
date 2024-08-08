import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  @Input()
  isEditMode : boolean = false;

  @Input() selectedTask : Task;

  @ViewChild('createTaskForm') taskForm : NgForm;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

@Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  ngAfterViewInit(){
     setTimeout(()=>{
      this.taskForm.form.patchValue(this.selectedTask);
    }, 1000);
  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  onFormSubmit( form : NgForm){
    // console.log("Form Submitted", form.value);
    this.EmitTaskData.emit(form.value);
    this.OnCloseForm();
  }

}
