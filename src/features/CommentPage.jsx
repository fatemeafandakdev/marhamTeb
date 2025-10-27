import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import leaf from "../assests/img/blog/leaf.png"
import CommentCard from "./CommentCard";

export default function CommentPage() {
   

const comments = [
    {
      id: 1,
      name: "سارا رضایی",
      comment: "محصول خیلی باکیفیتی بود، بسته‌بندی هم عالی بود."
    },
    {
      id: 2,
      name: "مهدی صادقی",
      comment: "ارسال سریع بود و دقیقا همون چیزی بود که سفارش داده بودم."
    },
    {
      id: 3,
      name: "نازنین موسوی",
      comment: "طعمش فوق‌العاده بود، پیشنهاد می‌کنم حتما امتحان کنید."
    },
    {
      id: 4,
      name: "حمید نوری",
      comment: "قیمتش نسبت به کیفیتش واقعا مناسبه، ممنون از فروشگاه خوبتون."
    },
    {
      id: 5,
      name: "الهام کریمی",
      comment: "خیلی از خرید راضی‌ام، دوباره هم سفارش می‌دم."
    },
    {
      id: 6,
      name: "علی احمدی",
      comment: "کمی دیر رسید ولی کیفیت عالی بود، ارزش صبر کردن داشت."
    },
    {
      id: 7,
      name: "ریحانه مرادی",
      comment: "بسته‌بندی زیبا و تمیز، همه چیز عالی بود."
    },
    {
      id: 8,
      name: "سجاد کاظمی",
      comment: "خیلی زود به دستم رسید، پشتیبانی هم محترمانه بود."
    },
    {
      id: 9,
      name: "زهرا حیدری",
      comment: "بوی محصول طبیعی و دلنشینه، کیفیت بالا."
    },
    {
      id: 10,
      name: "حامد جعفری",
      comment: "برای هدیه گرفتم، خیلی خوششون اومد. ممنون ازتون!"
    }
  ];

  return (
    <div
      className="w-[100%] py-12 bg-cover bg-center relative shadow-lg m-auto"
      
    >
      <img src={leaf} className="absolute right-0 top-10 " alt=""/>
      <h1 className="text-lg font-bold mb-6 text-left ml-20 md:ml-0 md:text-center md:text-2xl  ">مشتری های عزیز ما چه می گویند</h1>
      <div className="  h-full py-10 w-[90%] !m-auto">
        <Swiper
          spaceBetween={60}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper  !m-auto !w-[90%] "
        >
          {comments.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center items-center h-full m-auto w-[90%] my-20">
                <CommentCard name={item.name} comment={item.comment} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
