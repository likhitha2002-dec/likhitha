import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
       <div className='navbar_text'>
           
           <div className='logo'><img src="/public/img/img-2.jpg" alt=""/></div>
           <ul className='navbar_ul'>
              <li><a href="" to="">Home</a></li>
              <li><a href="" to="Menu">Menu</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Login</a></li>
           </ul>
       </div>
    </nav>
  )
}

export default Navbar