import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  ngOnInit(): void {
    // let obs = new Observable(observer => {
    //   observer.next(Math.random());
    // })


    // //subscriber 1
    // obs.subscribe( (value) => {
    //   console.log('Subscriber 1', value);
    // });

    // //subscriber 2
    // obs.subscribe( (value) => {
    //   console.log('Subscriber 1', value);
    // });


    //subject
    // let subject = new Subject();

    
    // // //subscriber 1
    // subject.subscribe( (value) => {
    //   console.log('Subscriber 1', value);
    // });

    // // //subscriber 2
    // subject.subscribe( (value) => {
    //   console.log('Subscriber 1', value);
    // });

    // subject.next(Math.random());


    //suject
    // const subject = new Subject();

    // const subject = new ReplaySubject(2, 1000);  

    // subject.next(100);
    // subject.next(200);
    // subject.next(300);
    //behaviour subject
    // const subject = new BehaviorSubject<number>(100);

    //ajax call
    // const data = ajax.get('https://randomuser.me/api/');

    // data.subscribe( (response) => {
    //   console.log(response);
    // });
    // data.subscribe( (response) => {
    //   console.log(response);
    // })
    // data.subscribe( (response) => {
    //   console.log(response);
    // })

    // subject.subscribe( (response) => {
    //   console.log( 'subscriber 1 ' + response);
    // });
    // subject.subscribe( (response) => {
    //   console.log('subscriber 2 ' + response);
    // });

    // subject.next(Math.random());

    // subject.subscribe( (response) => {
    //   console.log(response);
    // })

    // data.subscribe(subject);

    // //async subject
    // const asyncSubject = new AsyncSubject();

    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);

    // asyncSubject.complete();

    // asyncSubject.subscribe( (data) => {
    //   console.log('subscriber 1 : '+ data);
    // });


    // asyncSubject.complete();
    // asyncSubject.next(400);

    // asyncSubject.subscribe( (data) => {
    //   console.log('subscriber 2 : '+ data);
    // });


    const promise = new Promise( (resolve, reject) => {
      console.log('promise');
      resolve(' 100');
    });

    promise.then( (data) =>{
      console.log('promise then :'+ data);
    })

    const observable = new Observable( (observer) => {

      observer.next('observable');
      observer.next('emited');
      observer.next('twice');

      observer.complete();
    });

    observable.subscribe( (data) => {
      console.log('subscriber 1 : '+ data);
    });
}

}

