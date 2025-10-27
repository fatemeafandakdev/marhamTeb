import React from "react";
import skin from "../assests/img/blog/skin.png";
import scrap from "../assests/img/blog/scrap.png";
import shampo1 from "../assests/img/blog/shampo1.png";
import damnoosh from "../assests/img/blog/damnoosh.png";
import LayOut from "../layout/LayOut";

function Blog() {
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
    <LayOut>
    <div className="flex flex-wrap  m-auto gap-4 py-10">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className=" w-[90%] md:w-[40%] m-auto cursor-pointer rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
        >
          <img
            src={blog.img}
            alt={blog.alt}
            className="w-full h-64 object-cover"
          />
          <p className="text-center text-gray-800 font-semibold py-3 bg-white">
            {blog.title}
          </p>
        </div>
      ))}
    </div>
    </LayOut>
  );
}

export default Blog;
