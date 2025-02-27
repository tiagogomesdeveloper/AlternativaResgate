import { Component, ElementRef } from '@angular/core';
import { AnimationService } from 'src/styles/animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mostrarAvisoCookie: boolean = false;

  constructor(
    private el: ElementRef,
    private animationService: AnimationService
  ) {}

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

  ngAfterViewInit() {
    const animatedElements = this.el.nativeElement.querySelectorAll(
      '.animated-1, .animated-2, animated-3'
    );
    animatedElements.forEach((element: HTMLElement) => {
      this.animationService.observe(element);
    });
  }
}
