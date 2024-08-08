import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  newTask : string = '';
  
  taskService : TaskService = inject(TaskService);

  onCreateTask() {
    this.taskService.onCreateTask(this.newTask);
  }
}
