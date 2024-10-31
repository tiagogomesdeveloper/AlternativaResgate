import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private observer!: IntersectionObserver;

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('visible');
            target.classList.remove('hidden');
          } else {
            target.classList.remove('visible');
            target.classList.add('hidden');
          }
        });
      });
    });
  }

  observe(element: HTMLElement) {
    this.observer.observe(element);
  }
}
