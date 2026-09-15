import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Power Fit Temuco | Tu energía. Tu espacio.',
 description: 'Conoce Power Fit en Diego Portales 968, Temuco. Máquinas, pesas libres y comunidad. Consulta membresías, horarios y cómo llegar.',
 icons: { icon: '/favicon.svg' },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es-CL"><body>{children}</body></html>}
