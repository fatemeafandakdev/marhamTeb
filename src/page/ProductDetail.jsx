import React from "react";
import LayOut from "../layout/LayOut";
import { useSearchParams } from "react-router-dom";
import product from "../features/productData";
import useCreate from "../store/ShopStore";
function ProductDetail() {

   
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { addProduct } = useCreate(); 
 console.log(id)
  const selectedProduct = product.find((item) => item.id ===Number(id) );
  
  if (!selectedProduct) {
    return (
      <LayOut>
        <p className="text-center text-gray-500 mt-20 text-lg">
          محصولی با این مشخصات یافت نشد 😕
        </p>
      </LayOut>
    );
  }

  return (
    <LayOut>
      <div className="max-[90%] mx-auto my-12 bg-white border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 transition-all duration-300 hover:shadow-2xl">
      
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.nameFa}
            className="w-80 h-80 object-contain rounded-2xl border border-gray-100 shadow-md hover:scale-105 transition-transform"
          />
        </div>

       
        <div className="w-full md:w-1/2 space-y-5 text-right">
          <h2 className="text-3xl font-extrabold text-gray-800 border-b-2 border-green-500 pb-2">
            {selectedProduct.nameFa}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {selectedProduct.description || "توضیحاتی برای این محصول ثبت نشده است."}
          </p>

          <div className="grid grid-cols-2 gap-y-2 text-sm sm:text-base">
            <p className="text-gray-500">وضعیت:</p>
            <p
              className={`font-semibold ${
                selectedProduct.available ? "text-green-600" : "text-red-500"
              }`}
            >
              {selectedProduct.available ? "موجود در انبار" : "ناموجود"}
            </p>

            <p className="text-gray-500">وزن:</p>
            <p className="font-medium text-gray-700">
              {selectedProduct.weight || "—"}گرم
            </p>

            <p className="text-gray-500">قیمت:</p>
            <p className="text-green-600 font-bold text-lg">
              {selectedProduct.price.toLocaleString()} تومان
            </p>
          </div>

          <button className="mt-6 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300" onClick={()=>addProduct(selectedProduct)}>
            افزودن به سبد خرید 🛒
          </button>
        </div>
      </div>
    </LayOut>
  );
}

export default ProductDetail;
