import { ArrowUpRight } from 'lucide-react';
import { gym } from '@/data/gym';
export function ContactLink({ children = 'Hablemos por Instagram', secondary = false }: { children?: React.ReactNode; secondary?: boolean }) {
  return <a className={`button ${secondary ? 'button-secondary' : ''}`} href={gym.instagram} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={18}/></a>;
}
