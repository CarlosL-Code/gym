import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryItem {
  src: string;
  alt: string;
  badge: string;
  description: string;
  featured?: boolean;
  gridClass: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html'
})
export class Gallery {
  selectedIndex: number | null = null;

  images: GalleryItem[] = [
    {
      src: '/assets/img-octubre-2026/gym-accion.webp',
      alt: 'Sala Principal de Alto Rendimiento',
      badge: 'VISTA PANORÁMICA',
      description: 'Amplia zona de musculación, discos olímpicos, pasto sintético y máquinas de última generación.',
      featured: true,
      gridClass: 'md:col-span-7'
    },
    {
      src: '/assets/img-octubre-2026/entrenamiento.webp',
      alt: 'Entrenamiento Guiado y Comunidad',
      badge: 'COACHING EN SALA',
      description: 'Ambiente motivador con apoyo profesional en zona de press de banca y fuerza.',
      featured: true,
      gridClass: 'md:col-span-5'
    },
    {
      src: '/assets/img-octubre-2026/coach-guiando.webp',
      alt: 'Asesoría Técnica Personalizada',
      badge: 'SUPERVISIÓN PROFESIONAL',
      description: 'Corrección postural y guía constante en máquinas de pierna y musculación.',
      gridClass: 'md:col-span-4'
    },
    {
      src: '/assets/img-octubre-2026/hiptrup.webp',
      alt: 'Zona Especializada Blackfit',
      badge: 'HIP THRUST & GLÚTEOS',
      description: 'Equipamiento biomecánico Blackfit diseñado para máxima activación y seguridad.',
      gridClass: 'md:col-span-4'
    },
    {
      src: '/assets/img-octubre-2026/jalon.webp',
      alt: 'Estaciones de Poleas y Tracción',
      badge: 'HIPERTROFIA Y CONTROL',
      description: 'Torres multifuncionales de poleas para trabajo preciso de espalda, tríceps y torso.',
      gridClass: 'md:col-span-4'
    },
    {
      src: '/assets/img-octubre-2026/peso-muerto.webp',
      alt: 'Zona de Peso Libre y Boxeo',
      badge: 'FUERZA Y POTENCIA',
      description: 'Barras olímpicas, bumper plates Blackfit y sacos de boxeo para entrenamientos completos.',
      gridClass: 'md:col-span-6'
    },
    {
      src: '/assets/img-octubre-2026/press.webp',
      alt: 'Levantamiento Olímpico y Press',
      badge: 'ESPÍRITU ESPARTANO',
      description: 'Espacio dedicado para superar tus marcas personales en press militar y fuerza.',
      gridClass: 'md:col-span-6'
    }
  ];

  openLightbox(index: number) {
    this.selectedIndex = index;
  }

  closeLightbox() {
    this.selectedIndex = null;
  }

  nextImage(event?: Event) {
    event?.stopPropagation();
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    }
  }

  prevImage(event?: Event) {
    event?.stopPropagation();
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.selectedIndex === null) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }
}
