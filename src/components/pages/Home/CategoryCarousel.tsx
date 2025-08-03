import { useSelector } from 'react-redux';
import { IState } from '@/store/interfaces/IState';
import Category from './Category';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'

const CategoryCarousel = () => {
  const categories = useSelector((state: IState) => state.Categories.categories);

  return (
    <div className="bg-[#fff] text-center w-full py-16 px-2">
      {/* "Choose Categories" Text in Green */}
      <p className="text-sm text-green-500 mb-">Choose Categories</p>

      {/* "Explore Categories" Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Explore Categories</h2>

      <div className=" mx-auto">
        <Swiper
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="p-1">
                <div className="rounded-none border-none bg-transparent shadow-none">
                  <Category category={category} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryCarousel;
