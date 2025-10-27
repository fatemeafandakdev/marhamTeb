import React from "react";
import { useNavigate } from "react-router-dom";

import nopain from "../assests/img/nopain.webp";
import energy from "../assests/img/energy.webp";
import honny from "../assests/img/honny.webp";
import anti from "../assests/img/antibalgham.webp";

function BestProduct() {
  const navigate = useNavigate();

  const bestProducts = [
    {
      id: 17,
      img: anti,
      alt: "محصول ضد بلغم",
     
    },
    {
      id: 18,
      img: honny,
      alt: "محصول عسل گیاهی",
      
    },
    {
      id: 19,
      img: energy,
      alt: "محصول انرژی‌زا",
      
    },
    {
      id: 20,
      img: nopain,
      alt: "محصول ضد درد",
      
    },
  ];

  return (
    <div className="w-[92%] flex flex-col sm:flex-row justify-center gap-6 items-center py-10 px-4 m-auto">
      {bestProducts.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/productDetail?id=${item.id}`)}
          className="
            w-full sm:w-1/4 cursor-pointer 
            rounded-2xl overflow-hidden shadow-md 
            transition-transform duration-300 hover:scale-105 hover:shadow-xl
          "
        >
          <img
            src={item.img}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
         
        </div>
      ))}
    </div>
  );
}

export default BestProduct;
