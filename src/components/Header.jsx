import  { useState } from "react";
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import arm from "../assests/img/arm.webp";
import { Link } from "react-router-dom";
import useCreate from "../store/ShopStore"; 


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

 
  const products = useCreate((state) => state.products);

  
  const totalCount = products.reduce((sum, p) => sum + (p.quantity || 0), 0);

  return (
    
    <div className="w-full shadow-md flex flex-col ">
    
      <header className="w-full bg-white py-3 px-4 sm:px-6 flex items-center justify-between">
      
        <div className="flex items-center">
          <Link to={"/"} className="block bg-gray-200 rounded-full overflow-hidden w-36 h-10 sm:w-60 sm:h-12">
            <img src={arm} alt="arm" className="w-full h-full object-cover" />
          </Link>
        </div>

        {/* 🔸 باکس جستجو (نمایش فقط در دسکتاپ) */}
        <div className="flex-1 max-w-md mx-3 hidden sm:flex">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="جستجو کنید..."
              className="w-full border border-green-500 rounded-2xl py-2 pl-4 pr-10 outline-none text-sm focus:ring-2 focus:ring-green-400"
            />
            <button className="absolute right-1 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition">
              <FaSearch size={16} />
            </button>
          </div>
        </div>

   
        <div className="flex items-center gap-3 sm:gap-4">
        
          <div className="relative text-green-600 hover:text-green-800 transition">
            <Link to={"/shopBasket"}>
              <FaShoppingCart size={24} />
            </Link>

          
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {totalCount}
              </span>
            )}
          </div>

          <button className="hidden sm:flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
            <FaUser />
            <span>ورود به حساب کاربری</span>
          </button>

       
          <button
            className="sm:hidden text-green-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </header>

     
      <div
        className={`flex flex-col sm:flex-row w-full text-gray-800 justify-center gap-6 text-base font-semibold pt-2 pb-5 transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0 overflow-hidden sm:max-h-full"
        }`}
      >
        <span>محصولات گیاهی</span>
        <span>گیاهان دارویی</span>
        <span>براساس درمان</span>
        <Link to={"/contact"} className="text-red-700">
          تماس با ما
        </Link>
        <Link to={"/blog"} className="text-green-600">
          مطالب آموزشی (وبلاگ)
        </Link>
      </div>

     
      <div className="sm:hidden px-4 pb-3">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="جستجو کنید..."
            className="w-full border border-green-500 rounded-2xl py-2 pl-4 pr-10 outline-none text-sm focus:ring-2 focus:ring-green-400"
          />
          <button className="absolute right-1 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition">
            <FaSearch size={16} />
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default Header;
