import { Component, ElementRef, ViewChild } from '@angular/core';
import { filter, fromEvent, map } from 'rxjs';
import { from, Observable, of } from 'rxjs';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-observables';

  data: any[] = [];

  //for  From Event 
  @ViewChild('createButton') createBtn: ElementRef;

  createBtnObservable;

  array1 = [1, 2, 3, 4, 5];
  array2 = ['A', 'B', 'C', 'D', 'E'];

  // //1. Create a new Observable

  // myObservables = new Observable((observer) => {
  //   //observer.next([1,2,3,4,5]);
  //   //observer.next(1);
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   //here we are calling a error
  //   // setTimeout(() => {observer.error(new Error('Something went wrong. Please try again later!'))}, 3000);

  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 5000);
  // });

  //OF IN RXjS NEED TO import
  // myObservables = of(this.array2);
  // myObservables = of(this.array1, this.array2);

  promiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50]);
  });

  //From Operator from rxjs 
  // myObservables = from(this.array1);
  // myObservables = from(this.promiseData);

  // 2, 4, 6, 8, 10
  // now to display 10, 20, 30, 40, 50 which is multiple of 5
  // myObservables = from([2,4,6,8,10]);



  //for filter data 
  // myObservables = from([2,4,6,8,10, 12]);

  // transformObs = this.myObservables.pipe(map( (val) => {
  //   return val * 5;
  // }))


  // //for filter observable 
  // filterobs = this.transformObs.pipe( filter( (val) => {
  //   return val % 4 === 0;
  // })) 

  //chain reaction using pipe
  // chainOfMapAndFilterObs = this.myObservables.pipe(
  //   map( (val) => {
  //     return val * 5;
  //   }),
  //   filter( (fil) => { 
  //     return fil % 4 === 0;
  //   }
  // ));

  // chain reaction using pipes on directly on from
  myObservables = from([2,4,6,8,10, 12]).pipe(
    map( (value: number) => {
      return value * 5;
    }),
    filter( (value: number) => {
      return value % 4 === 0;
    }
  ));


  getAsyncData() {
    //observer
    //next, error, complete

    //this code is depricated
    // this.myObservables.subscribe(
    //   (val: any) => {
    //     this.data.push(val);
    //   },
    //   (err) => {
    //     alert(err.message);
    //   },
    //   () => {
    //     alert('completed');
    //   }
    // );


    // //new code 
    // this.myObservables.subscribe({

    //   next: (val: any) => {
    //     this.data.push(val);
    //     console.log(val);
    //   },
    //   error: (err) => {
    //     alert(err.message);
    //   },
    //   complete: () => {
    //     alert('completed');
    //   }
    // });


    //for maps the observer is 
    // this.transformObs.subscribe({

    //   next: (val: any) => {
    //     this.data.push(val);
    //     console.log(val);
    //   },
    //   error: (err) => {
    //     alert(err.message);
    //   },
    //   complete: () => {
    //     alert('completed');
    //   }
    // });



    ///for filter the observer is
    // this.filterobs.subscribe({

    //   next: (val: any) => {
    //     this.data.push(val);
    //     console.log(val);
    //   },
    //   error: (err) => {
    //     alert(err.message);
    //   },
    //   complete: () => {
    //     alert('completed');
    //   }
    // });



    //for chain of maps and filter the observer is
    // this.chainOfMapAndFilterObs.subscribe({

    //   next: (val: any) => {
    //     this.data.push(val);
    //     console.log(val);
    //   },
    //   error: (err) => {
    //     alert(err.message);
    //   },
    //   complete: () => {
    //     alert('completed');
    //   }
    // });


    //for from` operator
    this.myObservables.subscribe({

      next: (val: any) => {
        this.data.push(val);
        console.log(val);
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        alert('completed');
      }
    });

  }
  // buttonClicked() {
  //   let  count = 0;
  //   this.createBtnObservable = fromEvent(this.createBtn.nativeElement, 'click')
  //     .subscribe({
  //       next: (data) => { console.log(data); 
  //         this.showItem(++count);
  //       }
  //     })
  // }

  ngAfterViewInit() {
    // this.buttonClicked();
  }

  // showItem(val){
  //   let div = document.createElement('div');
  //   div.innerText = 'Item' + val;
  //   div.className = 'data-list';
  //   document.getElementById('container').appendChild(div);
  // }
}

