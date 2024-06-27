import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard} from "swiper/modules";
import Conteiner from "../Conteiner.tsx";
import { reviews } from "./reviews.ts";
import quotesIcon from "/quotes-icon.png";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/keyboard";
import "./Reviews.scss";

function ReviewsQuotes() {
  return (
    <div className="reviews__quotes">
      <img src={quotesIcon} alt="#"/>
    </div>
  );
}

const reviewsList = reviews.map(slide => 
  <SwiperSlide key={slide.id}>
    <q className="reviews__text">{slide.reviewText}</q>
    <img
      className="reviews__image"
      src={slide.imageSrc}
      alt={slide.reviewAutor}
    />
    <p className="reviews__autor">{slide.reviewAutor}</p>
  </SwiperSlide>
);

export default function Reviews() {
  return (
    <Conteiner className="reviews__gallery">
      <ReviewsQuotes />

      <Swiper modules={[ Pagination, Autoplay, Keyboard, ]} 
        className="swiper"
        slidesPerView={2} autoHeight={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        keyboard={{ enabled: true, onlyInViewport: false }}
        breakpoints={{
          620: {slidesPerView: 2,},
          300: {
            slidesPerView: 1,
            spaceBetween: 0,
          }
        }}
      >
        {reviewsList}
      </Swiper>
    </Conteiner>
  );
}