import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {

  tasks: string[] = ['task 1', 'task 2', 'task 3'];

  taskService: TaskService = inject(TaskService);
  
  ngOnInit(){
    this.taskService.createTask.subscribe(
      {
        next: (value: string) => {
          this.tasks.push(value);
        }
      }
    )
  }
}
