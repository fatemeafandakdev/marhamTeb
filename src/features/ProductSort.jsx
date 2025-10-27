import React from "react";
import ProductSortCard from "./productSortCard";
import categories from "./Categori";
import { useNavigate } from "react-router-dom";



function ProductSort() {
    const navigate=useNavigate()
    
  return (
    <div className="p-6">
    
      <h1 className="text-2xl font-bold mb-6 text-center">
        خرید بر اساس دسته بندی
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
         {categories.map((cat) => (
          <ProductSortCard
            key={cat.id}
            img={cat.img}
            title={cat.title}
            onClick={() =>navigate(`/product/${cat.sort}`) }
          />
        ))} 
      </div>
    </div>
  );
}

export default ProductSort;
