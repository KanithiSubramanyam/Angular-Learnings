import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  title: string = 'Demo Component';
  // @Input() message : string[];
  @Input() message: string;

  @ViewChild('temp') tempPara: ElementRef;

  //aftercontentinit
  @ContentChild('tempParent') tempPara1: ElementRef;

  constructor() {
    // console.log('demo component');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchangesHook called');
    // console.log(this.message);
    // console.log(changes);
  }

  ngOnInit(): void {
    console.log('ng on init called');
    //  console.log(this.tempPara.nativeElement.value)
  }
  ngDoCheck(): void {
    console.log('DO Check Hook');
    // console.log('ngDOCheckHook', this.tempPara1);
  }

  ngAfterContentInit(): void {
    console.log('After Content Init Hook');
    // console.log(
    //   'ngAfterContentInit ',
    //   this.tempPara1.nativeElement.textContent
    // );
  }

  ngAfterContentChecked(): void {
    console.log('After Content Checked Hook');
    // console.log(
    //   'ngAfterContentChecked ',
    //   this.tempPara
    // );
  }

  ngAfterViewInit(): void {
    console.log('After View Init Hook');
    // console.log(
    //   'ngAfterviewInit ',
    //   this.tempPara
    // );
  }

  ngAfterViewChecked(): void {
    console.log('After View Checked Hook');
    // console.log(
    //   'ngAfterviewChecked ',
    //   this.tempPara
    // );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Hook Called');
  }
}
