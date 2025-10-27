import { Link } from "react-router-dom";

function ProductCard({ img, name, price, id }) {
  return (
    <div className="
      w-[80%] md:w-60 bg-white rounded-2xl border-2 m-auto border-green-400 
      shadow-lg hover:shadow-2xl overflow-hidden
    ">
      <div className="relative overflow-hidden h-64">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover py-10 transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col items-center text-center space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 tracking-tight">
          {name}
        </h3>
        <p className="text-green-600 font-extrabold text-xl">
          {price.toLocaleString()} <span className="text-sm font-medium">تومان</span>
        </p>

        <Link
          to={`/productDetail?id=${id}`}
          className="
            mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold 
            py-2 px-6 rounded-xl shadow-md transition-all duration-300
            hover:scale-105
          "
        >
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  );
}
export default ProductCard