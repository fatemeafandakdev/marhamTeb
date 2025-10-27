import React from 'react'
import ProductSort from '../features/ProductSort'
import NewProduct from '../features/NewProduct'
import ShampooBanner from '../features/ShampooBanner'
import TopLevelProduct from '../features/ToplevelProduct'
import BestProduct from '../features/BestProduct'
import CommentPage from '../features/CommentPage'
import BlogPage from '../features/BlogPage'
import LayOut from '../layout/LayOut'
import Banner from '../components/Banner'



function Home() {
  return (
    <LayOut>
      <Banner/>
     <ProductSort/>
     <NewProduct/>
     <ShampooBanner/>
     <TopLevelProduct/>
     <BestProduct/>
     <CommentPage/>
     <BlogPage/>
    </LayOut>
  )
}

export default Home
