import Representation from "../components/representation/Representation.tsx";
import Get from "../components/get/Get.tsx";
import Procces from "../components/procces/Procces.tsx";
import Gallery from "../components/gallery/Gallery.tsx";
import ButtonLink from "../components/buttonLink/ButtonLink.tsx";
import Reviews from "../components/reviewsSlider/Reviews.tsx";
import Contact from "../components/contact/Contact.tsx";

export default function Home() {
  return (
    <>
      <Representation />
      <Get />
      <Procces />
      <Gallery />
      <ButtonLink caption={"View More"}/>
      <Contact />
      <Reviews />
    </>
  );
}
