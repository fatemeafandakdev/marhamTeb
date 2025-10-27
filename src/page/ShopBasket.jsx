import React from "react";
import useCreate from "../store/ShopStore";
import ShoppingCard from "../features/ShoppingCard";
import LayOut from "../layout/LayOut";

function ShopBasket() {
  const { products, onIncrease, onDecrease, removeProduct } = useCreate();

  if (products.length === 0)
    return (
      <LayOut>
        <p className="text-center mt-10 text-gray-500 text-xl h-96">
          سبد خرید خالی است
        </p>
      </LayOut>
    );

  return (
    <LayOut>
      <div className="w-[95%] max-w-4xl m-auto p-6 flex flex-col gap-6 h-96">
        {products.map((product) => (
          <ShoppingCard
            key={product.id}
            img={product.image}
            name={product.nameFa}
            price={product.price}
            quantity={product.quantity}
            onIncrease={() => onIncrease(product.id)}
            onDecrease={() => onDecrease(product.id)}
            onRemove={() => removeProduct(product.id)}
          />
        ))}

        <div className="text-right text-xl font-bold mt-6">
          جمع کل:{" "}
          {products
            .reduce((sum, p) => sum + p.price * p.quantity, 0)
            .toLocaleString()}{" "}
          تومان
        </div>
      </div>
    </LayOut>
  );
}

export default ShopBasket;
