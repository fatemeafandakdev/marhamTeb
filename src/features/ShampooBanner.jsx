import React from "react";
import shampo from "../assests/img/Shampo.webp";
import tagviat from "../assests/img/Tagviat.webp";
import { useNavigate } from "react-router-dom";
function ShampooBanner() {
  const navigate=useNavigate()
  return (
    <div className="m-auto flex flex-col md:flex-row justify-between items-center gap-4 p-4 py-10 w-[96%]">
     
      <div className="relative w-full md:w-1/2 h-64 rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
       onClick={()=>navigate('/productDetail?id=5')}
      >
        <img
          src={shampo}
          alt="شامپو گیاهی"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500 flex flex-col justify-center items-center text-white text-center">
         
          
        </div>
      </div>

    
      <div className="relative w-full md:w-1/2 h-64 rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
       onClick={()=>navigate('/productDetail?id=34')}
      >
        <img
          src={tagviat}
          alt="تقویت مو"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onClick={()=>navigate('/productDetail?id=35')}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500 flex flex-col justify-center items-center text-white text-center">
          
        </div>
      </div>
    </div>
  );
}

export default ShampooBanner;
