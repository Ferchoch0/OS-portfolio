import Hero from '../sections/Hero/Hero';
import Marquee from '../components/Marquee/Marquee';
import Services from '../sections/Services/Services';
import Divider from '../components/Divider/Divider';
import OtterTask from '../sections/OtterTask/OtterTask';
import ProjectsPreview from '../sections/ProjectsPreview/ProjectsPreview';
import Team from '../sections/Team/Team';
import Contact from '../sections/Contact/Contact';
import { marqueeItems } from '../data/marquee';

export default function Home() {
    return (
        <>
            <Hero />
            <Marquee items={marqueeItems} speed={24} />
            <Services />
            <Divider />
            <OtterTask />
            <ProjectsPreview />
            <Team />
            <Contact />
        </>
    );
}
