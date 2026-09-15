# Power Fit Temuco

Sitio React + TypeScript, con enrutamiento compatible con Next.js mediante Vinext.

## Organización
- `app/page.tsx`: composición de la página, sin lógica de secciones.
- `app/layout.tsx`: documento y metadatos SEO.
- `components/layout/`: navegación, marca tipográfica y pie.
- `components/sections/`: secciones independientes.
- `components/shared/`: elementos reutilizables.
- `components/ui/`: primitivas disponibles del framework.
- `data/gym.ts`: datos del negocio, navegación, planes y normas.
- `styles/site.css`: tokens visuales, estilos y adaptación responsive.
- `public/images/`: imágenes locales.

## Contenido pendiente de confirmación
El brief no incluye horas exactas, precios actuales, logo original ni teléfono internacional completo. Se usa contacto por Instagram, valores a consultar y una marca tipográfica provisional. La foto de ambiente es referencial. No se presentan promociones históricas como vigentes ni testimonios inventados. El mapa corresponde a la dirección proporcionada.

Para habilitar WhatsApp, confirmar primero el número completo y agregar el enlace en `data/gym.ts`. Sustituir la fotografía por material autorizado del gimnasio y la marca tipográfica por el logo original cuando estén disponibles.

## Desarrollo
Usar el gestor de paquetes indicado en `package.json`. `npm run dev` inicia desarrollo; `npm run build` compila el sitio (también disponibles mediante pnpm). El despliegue es privado por defecto.

## Fotografía
Risen Wang, Unsplash: https://unsplash.com/photos/gym-equipment-inside-room-20jX9b35r_M
Licencia: https://unsplash.com/license. Fotografía referencial, no corresponde al local.

## Movimiento y formas
- `hooks/useScrollReveal.ts`: IntersectionObserver compartido, entradas repetibles desde arriba y abajo. Desconecta el observador al desmontar y respeta cambios de preferencia de movimiento reducido.
- `components/shared/AnimatedMain.tsx`: contenedor React de animación; mantiene la composición principal simple.
- `styles/motion.css`: transiciones, entradas escalonadas, formas redondeadas y microinteracciones. Sin dependencias adicionales ni eventos continuos de scroll; contenido visible si JavaScript está desactivado, al imprimir y al recibir foco de teclado.
