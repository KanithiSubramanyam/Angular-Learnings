import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LoggingService {

    http: HttpClient = inject(HttpClient)

    logError(data : {statusCode : number, errorMessage :string, dateTime : Date }) {
        this.http.post('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app/log.json',data
            ).subscribe();
           
    }
    fetechError() {
        this.http.get('https://angular-httpclient-42340-default-rtdb.asia-southeast1.firebasedatabase.app/log.json'
        ).subscribe((data)=>{
            console.log(data);
        });
    }

}