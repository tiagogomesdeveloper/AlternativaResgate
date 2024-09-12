import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  menuActive: boolean = false;
  @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick(section: string) {
    this.scrollTo.emit(section);
    this.toogleMenuMobile();
  }

  toogleMenuMobile() {
    this.menuActive = !this.menuActive;
  }
}
