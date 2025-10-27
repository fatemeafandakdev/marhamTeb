import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LayOut({children}) {
  return (
    <div className='w-[95%] m-auto'>
<Header/>

{children}
<Footer/>
      
    </div>
  )
}

export default LayOut
