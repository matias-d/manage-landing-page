"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { reviews } from '@/utils/reviews';
import Card from './card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const breakpoints = {
    320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    1440: {
        slidesPerView: 3,
    }

}

export default function ReviewsList() {
  return (
        <Swiper
        loop={true}
        spaceBetween={50}
        breakpoints={breakpoints}
        slidesPerView={3}
        grabCursor={true}
        modules={[Navigation, Thumbs, Pagination]}
        pagination={{el: '.pagination', clickable: true}}
        className='w-[100vw] md:w-full overflow-hidden animate-fade-up'
    >

        {
          reviews.map(review => (
            <SwiperSlide key={review.id}>
                <Card review={review}/>
            </SwiperSlide>
            ))
        }
        <div className="pagination text-center pt-4 gap-x-2 lg:hidden flex justify-center items-center"></div>
    </Swiper>
  )
}
