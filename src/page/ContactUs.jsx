import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaMobileAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import LayOut from "../layout/LayOut";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
   
    alert("پیام شما با موفقیت ارسال شد ✅");
    reset();
  };

  return (
    <LayOut>
    <div className="min-h-screen m-auto w-[90%] flex flex-col items-center py-10 px-4 bg-purple-100">
      <h2 className="text-3xl font-bold text-green-600 mb-10">ارتباط با ما</h2>

      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8 w-full max-w-5xl bg-white shadow-md rounded-2xl p-6">
        {/* ✅ فرم سمت چپ */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 order-2 md:order-1"
        >
          <div>
            <label className="block text-gray-700 mb-1">نام</label>
            <input
              type="text"
              {...register("name", { required: "نام الزامی است" })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">موبایل</label>
            <input
              type="tel"
              {...register("mobile", {
                required: "شماره موبایل الزامی است",
                pattern: {
                  value: /^09[0-9]{9}$/,
                  message: "شماره موبایل معتبر نیست"
                }
              })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.mobile && (
              <span className="text-red-500 text-sm">
                {errors.mobile.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">ایمیل</label>
            <input
              type="email"
              {...register("email", {
                required: "ایمیل الزامی است",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "ایمیل معتبر نیست"
                }
              })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">پیام</label>
            <textarea
              rows="4"
              {...register("message", { required: "لطفاً پیام خود را وارد کنید" })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            ارسال پیام
          </button>
        </form>

        {/* ✅ اطلاعات تماس سمت راست */}
        <div className="flex flex-col justify-center gap-10 order-1 md:order-2 text-right">
          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <p>تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۲۳</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaClock className="text-green-600 text-xl" />
            <p>ساعات کاری: شنبه تا پنج‌شنبه، ۸ صبح تا ۶ عصر</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaPhoneAlt className="text-green-600 text-xl" />
            <p>تلفن ثابت: ۰۲۱-۸۸۸۸۸۸۸۸</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaMobileAlt className="text-green-600 text-xl" />
            <p>موبایل: ۰۹۱۲۳۴۵۶۷۸۹</p>
          </div>
        </div>
      </div>
    </div>
    </LayOut>
  );
}

export default ContactUs;
