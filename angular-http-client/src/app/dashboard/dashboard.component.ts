import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../model/task';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { TaskService } from '../services/Task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;

  http: HttpClient = inject(HttpClient);

  allTasks: Task[] = [];

  taskService: TaskService = inject(TaskService);

  editMode: boolean = false;

  selectedTask: Task;
  currentTaskId: string;

  isLoading: boolean = false;

  errorMessage: string | null = null;

  errorSub : Subscription;

  showTaskDetails : boolean = false;

  currentTask : Task | null = null;

  ngOnInit(): void {
    this.fetchAllTask();
    
    this.errorSub = this.taskService.errorSubject.subscribe({
      next: (err) => {
        this.errorMessage = err.message;
        this.setErrorMessage(err);
      }
    })
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }
  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = {
      title: '', description: '', assignedTo: '', createdAt: '', priority: '', status: '', id: ''
    }
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  createOrUpdateTask(form: Task) {
    // console.log("Task Created", form);
    // // this.http.post('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json', form)
    // // .subscribe( (response)=>{
    // //   console.log(response);
    // // });

    // const headers = new HttpHeaders({ 'my-header': 'my-header-value' })
    // this.http.post<{ name: string }>('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json', form, { headers: headers })
    //   .subscribe((response) => {
    //     console.log(response);
    //   });
    //   this.fetchAllTask();


    if (this.editMode) {
      this.taskService.updateTask(this.currentTaskId, form);
    } else {
      this.taskService.createTask(form);
    }
  }

  private fetchAllTask() {
    // // this.http.get('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app//tasks.json')
    // // .subscribe( (response) =>{
    // //   console.log(response);
    // // })

    // this.http.get<{ [key: string]: Task }>('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app//tasks.json')
    //   .pipe(map((response) => {
    //     //transform data
    //     let tasks = [];

    //     for (let key in response) {
    //       if (response.hasOwnProperty(key)) {
    //         tasks.push({ ...response[key], id: key });
    //       }
    //     }
    //     return tasks;
    //   }))
    //   .subscribe((response) => {
    //     this.allTasks = response;
    //     // console.log(response);
    //   })
    //   this.fetchAllTask();
    this.isLoading = true;
    this.taskService.getAllTasks().subscribe({
      next: (task: Task[]) => {
        this.allTasks = task;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.setErrorMessage(error);
        this.isLoading = false;
        
      },
    });
  }

  private setErrorMessage(err: HttpErrorResponse) {
    console.log(err)
    if (err.error.error === 'Permission denied') {
      this.errorMessage = 'You do not have permission to perform action';
    }
    else{
      this.errorMessage = err.message;
    }
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

  fetchAllTasksToDisplay() {
    this.fetchAllTask();
  }

  deleteTask(key: string) {
    this.taskService.deleteTask(key);
    this.fetchAllTask();
  }
  clearAllTasks() {
    this.taskService.deleteAllTasks();
    this.fetchAllTask();
  }

  onEditClassClick(key: string) {
    // this.taskService.editTask(key);
    this.showCreateTaskForm = true;
    this.editMode = true;
    // console.log(key);

    this.selectedTask = this.allTasks.find((task) => {
      return task.id === key;
    })

    this.currentTaskId = key;
  }

  showCurrentTaskDetails(id : string){
    this.showTaskDetails = true;
    this.taskService.getTaskDetails(id).subscribe({
      next : (response : Task) =>{
        this.currentTask = response;
      }
    });

    
  }
  CloseTaskDetails(value : boolean){
    this.showTaskDetails = value;
  }
}
