import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Task } from "../model/task";
import { catchError, map, Subject, tap, throwError } from "rxjs";
import { LoggingService } from "./Logging.service";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class TaskService {

    http: HttpClient = inject(HttpClient);
    errorSubject = new Subject<HttpErrorResponse>();

    loggingService: LoggingService = inject(LoggingService);


    createTask(task: Task) {
        const headers = new HttpHeaders({ 'my-header': 'my-header-value' })
        this.http.post<{ name: string }>('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json', task, { headers: headers })
            .subscribe({
                error : (err)=>{
                    this.errorSubject.next(err);
                }
            });
    }

    deleteTask(key: string | undefined) {
        this.http.delete('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/' + key + '.json')
        .pipe(catchError( (err)=>{
            const errorObj = {statusCode:err.status, errorMessage:err.message, dateTime: new Date()};
            this.loggingService.logError(errorObj);
            return throwError(()=>err);
        }))
        .subscribe({
            error : (err)=>{
                this.errorSubject.next(err);
            }
        });

    }

    deleteAllTasks() {
        this.http.delete('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
                        {
                            observe:'events', responseType:'json'
                        }
        )
        .pipe(
            tap( (event)=>{
                console.log(event);
            }),
            catchError( (err)=>{
            const errorObj = {statusCode:err.status, errorMessage:err.message, dateTime: new Date()};
            this.loggingService.logError(errorObj);
            return throwError(()=>err);
        }))
        .subscribe({
            error : (err)=>{
                this.errorSubject.next(err);
            }
        });
    }

    getAllTasks(){
        let headers = new HttpHeaders();
        headers = headers.set('content-type', 'application/json');
        headers = headers.set('content-type', 'text/html');

        let httpParams = new HttpParams();

        httpParams = httpParams.set('page2', '10');
        // httpParams = httpParams.set('item', '10');

        return this.http.get<Task[]>('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
            ,{headers:headers, params:httpParams, observe:'body'}
        )
        .pipe(map((response)=>{
            let tasks = [];
            console.log(response);
            
            for(let key in response){
                if(response.hasOwnProperty(key)){
                    tasks.push({...response[key], id: key})
                }
            }
            return tasks; 
        }),
        catchError( (err)=>{
            const errorObj = {statusCode:err.status, errorMessage:err.message, dateTime: new Date()};
            this.loggingService.logError(errorObj);
            return throwError(()=>err);
        }))

    }

    updateTask(id:string, task: Task){
        this.http.put('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/' + id + '.json', task)
        .pipe(catchError( (err)=>{
            const errorObj = {statusCode:err.status, errorMessage:err.message, dateTime: new Date()};
            this.loggingService.logError(errorObj);
            return throwError(()=>err);
        }))
        .subscribe({
            error : (err)=>{
                this.errorSubject.next(err);
            }
        });
    }

    getTaskDetails(id : string | undefined){
        return this.http.get('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/' + id + '.json')
        .pipe(map( (response)=>{
            let task = {};

            task = {...response, id: id}
            return task;
        }))
    }
}