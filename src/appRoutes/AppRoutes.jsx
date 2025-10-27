import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../page/Home'
import ContactUs from '../page/ContactUs'
import Blog from '../page/Blog'
import ProductType from '../page/ProductType'
import ProductDetail from '../page/ProductDetail'
import ShopBasket from '../page/ShopBasket'
import ScrollToTop from '../features/ScrollToTop'
function AppRoutes() {
  return (
   <BrowserRouter basename="/marhamTeb">
    <ScrollToTop/>
   <Routes>
   
<Route path='/' element={<Home/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='/contact' element={<ContactUs/>}/>
<Route path='/product/:sort' element={<ProductType/>}/>
<Route path='/productDetail' element={<ProductDetail/>}/>
<Route path='/shopBasket' element={<ShopBasket/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default AppRoutes

