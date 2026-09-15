import { AnimatedMain } from '@/components/shared/AnimatedMain';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Plans } from '@/components/sections/Plans';
import { Schedule } from '@/components/sections/Schedule';
import { Community } from '@/components/sections/Community';
import { Location } from '@/components/sections/Location';
export default function Home() {
 return <><a href="#gimnasio" className="skip-link">Saltar al contenido</a><Header/><AnimatedMain><Hero/><About/><Plans/><Schedule/><Community/><Location/></AnimatedMain><Footer/></>;
}
