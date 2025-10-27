import React from "react";


function ProductSortCard({ img, title, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex flex-col items-center bg-white border rounded-xl p-4 hover:shadow-lg transition-shadow duration-300"
    >
    
      <img
        src={img}
        alt={title}
        className="w-30 h-30 rounded-full object-cover mb-3"
      />
      
      
      <h3 className="text-center text-base font-medium text-gray-700">
        {title}
      </h3>
    </div>
  );
}

export default ProductSortCard;
