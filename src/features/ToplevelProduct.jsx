import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import product from './productData';
import ProductCard from './productCard';


function TopLevelProduct() {
  
  const topProducts = product.filter(item => item.label === "top-level");

  return (

    <div className='bg-gray-100 w-full rounded-t-xl py-10'>
      <div className='w-[96%] m-auto'>
        <h1 className="text-2xl font-bold mb-6 text-center"> پرفروش ترین محصولات</h1>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 5, spaceBetween: 50 },
      }}
      modules={[Pagination]}
      className="mySwiper !py-10"
    >
      {topProducts.map((item) => (
        <SwiperSlide key={item.id}
        className='flex justify-center items-center gap-4'
        >
          <ProductCard
          id={item.id}
            img={item.image}
            name={item.nameFa}
            price={item.price}
            
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    </div>
  );
}

export default TopLevelProduct;
