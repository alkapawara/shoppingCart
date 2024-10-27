import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet ,NavLink} from "react-router-dom";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoHeartFill } from "react-icons/go";
const Nabar = () => {
  const {cartItm}=useSelector((state)=>state.cart)
  return (
  
   
    <header className='bg-base-100 py-2 sticky top-0 z-50 shadow'>
      <div className='container'>
    <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li ><Link className='text-xl'>Item 3</Link></li>
        <li><Link>Item 3</Link></li>
      </ul>
    </div>
   <Link to ="/" className=" text-xl" ><b>Ecocomrce</b></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal gap-5">
      <li><NavLink to="/" className={({ isActive }) => isActive ? "isActive" : "navlink"}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? "isActive" : "navlink"}> About</NavLink></li>
      
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? "isActive" : "navlink"}> Contact</NavLink></li>
      
    </ul>
  </div>
 
  <div className="navbar-end flex gap-4">
  <GoHeartFill className='text-2xl text-red-400' />
   <Link to="/cart" >
   <div className='carticonBox'>
   <FontAwesomeIcon icon={faCartShopping}  className="cartIcon"/>
    <p className="cartLength">
    {cartItm.length}
   </p>

   </div>
   
   </Link>
  
  </div>
      </div>
      <Outlet />
</div>
</header>
  )
}

export default Nabar