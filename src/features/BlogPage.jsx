import React from "react";
import { useNavigate } from "react-router-dom";

import skin from "../assests/img/blog/skin.png";
import scrap from "../assests/img/blog/scrap.png";
import shampo1 from "../assests/img/blog/shampo1.png";
import damnoosh from "../assests/img/blog/damnoosh.png";

function BlogPage() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 30,
      img: skin,
      alt: "مراقبت پوست",
      title: "رازهای مراقبت طبیعی از پوست",
    },
    {
      id: 31,
      img: scrap,
      alt: "اسکراپ گیاهی",
      title: "فواید اسکراب‌های گیاهی برای شادابی پوست",
    },
    {
      id: 32,
      img: shampo1,
      alt: "شامپو طبیعی",
      title: "چرا شامپوی گیاهی انتخاب بهتری است؟",
    },
    {
      id: 33,
      img: damnoosh,
      alt: "دمنوش گیاهی",
      title: "دمنوش‌های آرامش‌بخش برای استرس روزانه",
    },
  ];

  return (
    <div className="w-[92%] flex flex-col sm:flex-row justify-center gap-6 items-center py-10 px-4 m-auto">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          onClick={() => navigate('/blog')}
          className="
            w-[90%] md:w-1/4 cursor-pointer 
            rounded-2xl overflow-hidden shadow-md 
            transition-transform duration-300 hover:scale-105 hover:shadow-xl
          "
        >
          <img
            src={blog.img}
            alt={blog.alt}
            className="w-full h-full object-cover"
          />
          <p className="text-center text-gray-800 font-semibold py-3 bg-white">
            {blog.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
