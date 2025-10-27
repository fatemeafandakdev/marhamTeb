import React from "react";


function ShoppingCard({ img, name, price, quantity, onIncrease, onDecrease }) {
  return (
   
      <div className="flex items-center gap-6 text-black rounded-3xl border border-gray-300 p-6 w-full bg-white max-w-4xl mx-auto mt-6">
        
        <img
          src={img}
          alt={name}
          className="w-32 h-32 object-cover rounded-2xl border border-gray-300"
        />

        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          
          <p className="text-gray-600 text-sm">
            قیمت واحد: <span className="font-bold text-green-600">{price.toLocaleString()} تومان</span>
          </p>

          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={onDecrease}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-200"
            >
              -
            </button>
            <span className="px-4 py-2 font-medium">{quantity}</span>
            <button
              onClick={onIncrease}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-200"
            >
              +
            </button>
          </div>

          <p className="text-gray-900 font-bold mt-3 text-lg">
            جمع: {(price * quantity).toLocaleString()} تومان
          </p>
        </div>
      </div>
    
  );
}

export default ShoppingCard;
