'use client';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { gym, navigation } from '@/data/gym';
export function Brand() { return <a href="#inicio" className="brand" aria-label="Power Fit, inicio"><span className="brand-symbol">P<span>F</span></span><span>POWER<b>FIT</b><small>TEMUCO · CHILE</small></span></a>; }
export function Header() {
 const [open,setOpen] = useState(false);
 return <header className="header"><div className="container header-inner"><Brand/><nav aria-label="Navegación principal" className={open ? 'nav nav-open' : 'nav'}>{navigation.map(([name,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{name}</a>)}<a href={gym.instagram} target="_blank" rel="noopener noreferrer" className="nav-cta">Únete a Power Fit <ArrowUpRight size={16}/></a></nav><button className="menu-toggle" aria-label={open?'Cerrar menú':'Abrir menú'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>
}
