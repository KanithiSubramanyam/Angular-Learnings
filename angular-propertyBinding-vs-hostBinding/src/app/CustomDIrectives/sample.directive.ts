import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appSample]',

})

export class SampleDirective {
    @HostBinding('value') inputValue: string = "Hello, how are you?";
    constructor() {
        console.log("Sample Directive");
    }

    @HostListener('focus') logMessage(){
        console.log("input value is focused");
    }
}