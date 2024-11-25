import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
const ProductCard = ({id,image,price,title,itms,likes,dataset,likeHandle}) => {
  return (
    <div
  style={{
    boxShadow: "0px 0px 9px 3px #6633991f",
  }}
  className="px-8 py-4 flex justify-center flex-col items-center relative productCard transition-all duration-300 ease-in-out hover:shadow-lg "
  key={id}
>
  {/* Image Section */}
  <div className="img-box">
    <img src={image} alt={title} className="w-full rounded-md" />
  </div>

  {/* Title and Price */}
  <p className="title-product font-bold text-gray-800 mt-4 text-center">
    {title}
  </p>
  <p className="text-center text-lg text-red-400">
    <b>&#x20b9;{price}</b>
  </p>

  {/* Action Icons */}
  <div className="gap-2 py-2 absolute flex-col -right-[50px] top-10 right-icon">

    {/* Like Icon */}
    <div
      onClick={() => likeHandle(id)}
      className={`bg-red-400 bg-opacity-80 p-3 rounded-md cursor-pointer font-bold text-white hover:scale-110 transition-transform `}
    >
      <GoHeartFill className="text-lg" color={likes[id] ? "#1f295d52" : "white"} />
    </div>

    {/* Search Icon */}
    <Link to={`/cart/${id}`}>
      <div className="bg-red-400 bg-opacity-80  p-3 rounded-md font-bold text-white hover:scale-110 transition-transform">
        <LiaSearchPlusSolid className="text-lg" />
      </div>
    </Link>
  </div>
  <button
    onClick={() => dataset(itms)}
    className="bg-slate-600 bg-opacity-90  py-2 px-4 cursor-pointer font-semibold text-white hover:text-gray-900 cartBtn"
  >
    Add To Cart
  </button>
</div>

  )
}

export default ProductCard