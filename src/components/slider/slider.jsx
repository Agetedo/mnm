import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard} from 'swiper/modules';
import { reviews } from './reviewsData.js';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/keyboard';
import './slider.scss';

function ReviewsDesign({ quotesIcon }) {
    return (
        <div className="reviews-design">
            <img src={quotesIcon} alt='#'/>
        </div>
    );
}

const reviewsList = reviews.map(slide => 
    <SwiperSlide key={slide.id}>
        <q className="reviews-text">{slide.reviewText}</q>
        <img
            className="reviews-image"
            src={slide.imageSrc}
            alt={slide.reviewAutor}
        />
        <p className="reviews-autor">{slide.reviewAutor}</p>
    </SwiperSlide>
);

export default function Slider() {
    return (
        <div className="slider">
            <div className="conteiner">

                <ReviewsDesign quotesIcon={'/quotes-icon.png'} />

                <Swiper modules={[Pagination, Autoplay, Keyboard,]} 
                    slidesPerView={2} autoHeight={true}
                    pagination={{ clickable:true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    keyboard={{ enabled: true, onlyInViewport: false }}
                    breakpoints={{
                        768: {slidesPerView: 2,},
                        318: {slidesPerView: 1,}
                    }}
                    className="swiper">

                    {reviewsList}
                </Swiper>
            </div>
        </div>
    );
}