import React from "react";
import insurrance from "../assests/img/footer/insurance.webp";
import free from "../assests/img/footer/free.webp";
import support from "../assests/img/footer/support.webp";
import pay from "../assests/img/footer/pay.webp";
import allCountry from "../assests/img/footer/allcountry.webp";
import { FaPlus, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  const footerData = [
    {
      id: 1,
      title: "ضمانت کیفیت محصول",
      description: "محصولات کاملا گیاهی و ارگانیک",
      img: insurrance,
    },
    {
      id: 2,
      title: "ارسال رایگان",
      description: "برای سفارشات بالای 1 میلیون تومان (تهران)",
      img: free,
    },
    {
      id: 3,
      title: "پشتیبانی و مشاوره",
      description: "مشاوره رایگان در ساعات کاری",
      img: support,
    },
    {
      id: 4,
      title: "پرداخت آسان",
      description: "روش‌های آسان خرید و پرداخت",
      img: pay,
    },
    {
      id: 5,
      title: "ارسال به سراسر ایران",
      description: "ارسال سریع و تحویل اکسپرس به سراسر کشور",
      img: allCountry,
    },
  ];

  return (
    <footer className="w-full bg-gray-100 text-gray-800">
      {/* کارت‌های ویژگی */}
      <div className="w-[95%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 py-12 px-6 text-center">
        {footerData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-base text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      {/* بخش پایین */}
      <div className="bg-green-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 justify-between">
          
          {/* معرفی فروشگاه */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-green-800 mb-4">
              عطاری آنلاین مرهم طب
            </h3>
            <p className="text-base lg:text-lg leading-7 text-gray-700 text-justify">
              فروشگاه گیاهان دارویی مرهم طب پس از سال‌ها تجربه و با هدف جمع‌آوری
              و عرضه کامل‌ترین مجموعه گیاهان دارویی، عرقیات سنتی، انواع ادویه‌جات
              ترکیبی ایرانی و خارجی، عسل طبیعی (قابل استفاده برای افراد دیابتی)،
              داروهای گیاهی، انواع دمنوش‌های گیاهی، ترکیبات مناسب لاغری و تناسب
              اندام و همچنین افزایش وزن و اشتها (با مجوز وزارت بهداشت) تلاش
              می‌کند تا مرغوب‌ترین محصولات گیاهی و ارگانیک را با مناسب‌ترین قیمت
              و شایسته‌ترین خدمات به مشتریان خود ارائه دهد.
            </p>
          </div>

          {/* لینک‌های مفید */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-green-800 mb-4">
              لینک‌های مفید
            </h3>
            <ul className="space-y-3 text-base">
              {[
                "درباره مرهم طب",
                "قوانین و مقررات خرید",
                "راهنمای ثبت سفارش",
                "روش‌های ارسال محصول",
                "روش‌های پرداخت",
                "پیگیری مرسوله",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-green-700 hover:text-green-900 cursor-pointer transition-all duration-200"
                >
                  <FaPlus className="text-lg" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ارتباط با ما */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-green-800 mb-4">
              ارتباط با ما
            </h3>
            <ul className="space-y-4 text-base text-gray-700">
              <li className="flex items-center gap-3">
                <FaPhone className="text-green-700 text-lg" />
                <span className="text-base">موبایل: ۰۹۱۲۳۷۶۴۸۰۷</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-700 text-lg" />
                <span className="text-base">
                  تهران، شهرک اکباتان، فاز ۱، بازارچه ۹، پلاک ۸
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-green-700 text-lg" />
                <span className="text-base">info@marhamteb.com</span>
              </li>
            </ul>
          </div>

          {/* خبرنامه */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-green-800 mb-4">
              خبرنامه
            </h3>
            <p className="text-base text-gray-700 mb-4">
              با ثبت‌نام در خبرنامه ما، از آخرین اخبار و محصولات جدید باخبر شوید.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 px-3 py-3 border border-green-300 rounded-r-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-700 text-white px-5 py-3 rounded-l-lg hover:bg-green-800 transition-all duration-200">
                ثبت
              </button>
            </div>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-base text-gray-600">
          © ۲۰۲۵ مرهم طب - تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
