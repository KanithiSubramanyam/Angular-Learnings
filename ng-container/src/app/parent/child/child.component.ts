import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @ContentChild('paragraph')
  para: ElementRef;

  @ContentChild(TestComponent) testEl: TestComponent;

  @ContentChildren('paragraph') paraList: QueryList<ElementRef>;

@ContentChildren(TestComponent) testElList: QueryList<TestComponent>;

  styleParagraph() {
    console.log(this.para.nativeElement);
    console.log(this.testEl.name);

    this.paraList.forEach(item => {
      console.log(item.nativeElement);
    })


    this.testElList.forEach(item => {
      console.log(item.name);
    })
  }
}
