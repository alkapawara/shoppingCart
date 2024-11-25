import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="w-full max-w-5xl py-5 mx-auto gap-5 columns-1 md:columns-2 space-y-5">
      <div className="gallery">
        {/* <img  src='https://blog.nihaojewelry.com/wp-content/uploads/2020/04/puffy-sleeves%EF%BB%BF.jpg' className='img11' /> 
  <img src='https://cdn.mos.cms.futurecdn.net/A4GDK27VMnz6LtFDy9yzk.jpg' className='img12' /> 
    <img  src='https://wallpapercave.com/wp/wp5522790.jpg' className='img21'/> 
     <img src='https://wallpapercave.com/wp/wp9563553.jpg'className='img22' />
    
      */}
<Link to="/shop" className="galleryLink">
    <div className="imgDivs relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-900 opacity-0 hover:opacity-30 hover:scale-150  cursor-pointer rounded-full transition-transform duration-700 ease-in "></div>
          <img
            className="img11 w-full h-full object-cover  "
            src="https://blog.nihaojewelry.com/wp-content/uploads/2020/04/puffy-sleeves%EF%BB%BF.jpg"
           
          />
          <p className="absolute bottom-4 left-2/4 bg-[#fff] px-8 py-2 text-center -translate-x-2/4 z-10 text-slate-900 font-semibold hover:text-red-400 cursor-pointer">
            Women
          </p>
        </div>
</Link>
<Link to="/shop" className="galleryLink">
<div className="imgDivs relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-900 opacity-0 hover:opacity-30 hover:scale-150  cursor-pointer rounded-full transition-transform duration-700 ease-in "></div>
          <img src="https://cdn.mos.cms.futurecdn.net/A4GDK27VMnz6LtFDy9yzk.jpg" className="img12" />
          <p className="absolute bottom-4 left-2/4 bg-[#fff] px-8 py-2 text-center -translate-x-2/4 z-10 text-slate-900 font-semibold hover:text-red-400 cursor-pointer">
            Electronics
          </p>
        </div>
</Link>
       
        <Link to="/shop" className="galleryLink">
        <div className="imgDivs relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-900 opacity-0 hover:opacity-30 hover:scale-150  cursor-pointer rounded-full transition-transform duration-700 ease-in "></div>
          <img
            className=" img21 w-full h-full "
            src="https://wallpapercave.com/wp/wp5522790.jpg"
          />
          <p className="absolute bottom-4 left-2/4 bg-[#fff] px-8 py-2 text-center -translate-x-2/4 z-10 text-slate-900 font-semibold hover:text-red-400 cursor-pointer">
            Jewelery
          </p>
        </div>
        </Link>
        
        <Link to="/shop" className="galleryLink">
        <div className="imgDivs relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-900 opacity-0 hover:opacity-30 hover:scale-150  cursor-pointer rounded-full transition-transform duration-700 ease-in "></div>
          <img src="https://wallpapercave.com/wp/wp9563553.jpg" className='img22' />
          <p className="absolute bottom-4 left-2/4 bg-[#fff] px-8 py-2 text-center -translate-x-2/4 z-10 text-slate-900 font-semibold hover:text-red-400 cursor-pointer">
            Men
          </p>
        </div>
        </Link>
        
      </div>
    </div>
  );
};

export default CategoryPage;
