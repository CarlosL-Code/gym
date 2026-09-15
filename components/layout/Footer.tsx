import { Brand } from './Header';
import { gym } from '@/data/gym';
export function Footer() {return <footer className="container footer"><Brand/><p>Tu energía. Tu espacio. Tu comunidad.</p><a href={gym.instagram} target="_blank" rel="noopener noreferrer">@powerfit.temuco ↗</a><span>© {new Date().getFullYear()} Power Fit Temuco</span></footer>}
