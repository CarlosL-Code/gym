import { Component, OnInit, OnDestroy, PLATFORM_ID, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

export interface BenefitShowcaseItem {
  src: string;
  tag: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
})
export class Benefits implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);

  activeIndex = 0;
  private timer: any;

  showcaseItems: BenefitShowcaseItem[] = [
    {
      src: '/assets/img-octubre-2026/coach-guiando.webp',
      tag: 'ACOMPAÑAMIENTO REAL',
      title: 'Coaching en Sala de Musculación',
      subtitle: 'Guía técnica constante para ejecutar cada repetición con máxima seguridad y estímulo.'
    },
    {
      src: '/assets/img-octubre-2026/hiptrup.webp',
      tag: 'BIOMECÁNICA DE ÉLITE',
      title: 'Zona Especializada Blackfit',
      subtitle: 'Máquinas de carga de discos diseñadas para aislar y potenciar tu fuerza.'
    },
    {
      src: '/assets/img-octubre-2026/jalon.webp',
      tag: 'HIPERTROFIA Y CONTROL',
      title: 'Torres de Poleas y Tracción',
      subtitle: 'Estaciones multifuncionales fluidas para trabajar espalda, brazos y torso al detalle.'
    },
    {
      src: '/assets/img-octubre-2026/peso-muerto.webp',
      tag: 'FUERZA PURA',
      title: 'Zona de Peso Libre y Bumper Plates',
      subtitle: 'Barras olímpicas y discos calibrados para tus levantamientos más exigentes.'
    },
    {
      src: '/assets/img-octubre-2026/press.webp',
      tag: 'ENERGÍA SIN LÍMITES',
      title: 'Entrenamiento de Alto Rendimiento',
      subtitle: 'Un ambiente motivador en pleno centro de Temuco que te impulsa a superar tus marcas.'
    }
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.timer = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.showcaseItems.length;
      this.cdr.detectChanges();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  selectSlide(index: number) {
    this.activeIndex = index;
    this.cdr.detectChanges();
    this.startAutoPlay();
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.showcaseItems.length;
    this.cdr.detectChanges();
    this.startAutoPlay();
  }

  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.showcaseItems.length) % this.showcaseItems.length;
    this.cdr.detectChanges();
    this.startAutoPlay();
  }
}
