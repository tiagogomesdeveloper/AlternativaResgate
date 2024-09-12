import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mostrarAvisoCookie: boolean = false;

  ngOnInit() {
    this.habilitarCarregamentoDivCookie();
  }
  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const position = element.offsetTop;
      window.scrollTo({
        top: position - 120,
        behavior: 'smooth',
      });
    }
  }

  habilitarCarregamentoDivCookie() {
    window.addEventListener('load', () => {
      if (localStorage.getItem('cookie')) return;
      this.mostrarAvisoCookie = true;
    });
  }

  fecharAvisoCookie() {
    localStorage.setItem('cookie', 'true');
    this.mostrarAvisoCookie = false;
  }
}
