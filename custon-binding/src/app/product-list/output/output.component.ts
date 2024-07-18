import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

    @Output() newItemEvent = new EventEmitter<{name:string, email:string}>();

    addItem(name: string, email:string) {
        this.newItemEvent.emit({name, email});
    }
}
