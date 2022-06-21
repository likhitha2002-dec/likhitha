import React from 'react';
import Navbar from './Navbar';
function Header () {
  return (
    <div className='banner'>
        <Navbar/>
       <div className='banner_content'>
        <div className='container'>
            <div className='banner_text'>
            <h3>
              Pizza Delivery  
            </h3>
            <h1>MAESTRO PIZINNI</h1>
            
            <div className='banner_btn'>
                <a href='' className='btn btn-smart'>Delivery Now</a>
            </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Header
