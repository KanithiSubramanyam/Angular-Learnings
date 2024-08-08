import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

    @Input('appClass') set appClass(value : Object){

      let entries = Object.entries(value);
      for(let item of entries){
        console.log(item[0], item[1]);
        let[className, condition] = item;
        if(condition){
          this.renderer.addClass(this.element.nativeElement,className);
        }
    };
}
}