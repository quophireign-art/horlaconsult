import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  inject,
} from '@angular/core';

/**
 * appReveal
 * A lightweight scroll-reveal directive powered by IntersectionObserver.
 * When the host element scrolls into view it receives the `is-visible`
 * class, which drives the CSS transition defined in styles.css.
 *
 * Usage:
 *   <div appReveal>...</div>
 *   <div appReveal [revealDelay]="150">...</div>
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** Optional stagger delay in milliseconds. */
  @Input() revealDelay = 0;

  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    this.renderer.addClass(host, 'reveal');

    if (this.revealDelay) {
      this.renderer.setStyle(
        host,
        'transition-delay',
        `${this.revealDelay}ms`,
      );
    }

    // Guard for environments without IntersectionObserver (SSR / old browsers).
    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(host, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(host, 'is-visible');
            this.observer?.unobserve(host);
          }
        });
      },
      { threshold: 0.12 },
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
