import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appStyle') set appStyle(styles: Object) {
    let styleEntries = Object.entries(styles);
    console.log(styleEntries);

    // for (let style of styleEntries) {
    //   let [cssStyle, value] = style;
    //   this.renderer.setStyle(this.element.nativeElement, cssStyle, value);
    // }

    styleEntries.forEach(([key, value]) => {
      this.renderer.setStyle(this.element.nativeElement, key, value);
    });
  }
}
