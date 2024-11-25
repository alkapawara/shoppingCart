import React from "react";
import { CiMail } from "react-icons/ci";
const CouponFooter = () => {
  return (
    <div className=" mx-auto  h-[300px] mt-3 lg:mt-16 bg-[#c3d7f0] relative">
      <div className="thumb hidden lg:flex absolute left-0 bottom-[0px] w-[520px] h-[394px]">
        <img
          src="https://shopo.quomodothemes.website/assets/images/discount-banner-3.1.png"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex justify-center flex-col items-center absolute right-0 top-28 -translate-x-2/4 ">
        <div>
          <h1 className="sm:text-3xl text-xl font-bold text-slate-900 mb-2 text-center">
            Get
            <span className="mx-1 text-red-500"> 20%</span>
            Off Discount Coupon
          </h1>
        </div>
        <div className=" bg-white pl-4 flex space-x-2 items-center focus-within:text-qyellow text-slate-900">
          <span>
            <CiMail />
          </span>
          <input
            type="email"
            className="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-slate-900 text-slate-900 font-400 tracking-wider"
            placeholder="EMAIL ADDRESS"
          />
          <button
            type="button"
            className="w-full h-full py-2 bg-red-400 text-sm font-bold"
          >
            Get the Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponFooter;
