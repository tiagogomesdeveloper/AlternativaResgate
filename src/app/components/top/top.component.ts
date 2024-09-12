import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {

  @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick(section: string) {
    this.scrollTo.emit(section);
  }
}
