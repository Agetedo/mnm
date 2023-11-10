import Representation from '../components/representation/representation.jsx';
import Get from '../components/get/get.jsx';
import Procces from '../components/procces/procces.jsx';
import Gallery from '../components/gallery/gallery.jsx';
import ButtonLink from '../components/button-link/button-link.jsx';
import Slider from '../components/slider/slider.jsx';
import Contact from '../components/contact/contact.jsx';

export default function Home() {
    return (
        <>
         <Representation />
         <Get />
         <Procces />
         <Gallery />
         <ButtonLink caption={'View More'}/>
         <Contact />
         <Slider />
        </>
    );
}
