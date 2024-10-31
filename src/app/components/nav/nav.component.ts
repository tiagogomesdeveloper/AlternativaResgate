import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isMobileMenuOpen = false;
  @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();
  onButtonClick(section: string) {
    this.scrollTo.emit(section);
    this.toggleMobileMenu();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
