import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  //1. Get Access to the DOM element which we want Add / Remove
  //2. Place from where we want to Add or Remove DOM Element

  constructor(
    private view: TemplateRef<any>,
    private template: ViewContainerRef
  ) {}

  @Input('appIf') set display(condition : boolean){
    if(condition){
      //Add
      this.template.createEmbeddedView(this.view);
    }else{
      //Remove
      this.template.clear();
    }

  }
}
 