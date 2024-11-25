import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById,addCart } from "../redux/cartSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryPage from "./CategoryPage";
import ProductCard from "./ProductCard";
import { FaLuggageCart } from "react-icons/fa";
import { IoRefreshSharp } from "react-icons/io5";
import { GoShieldLock } from "react-icons/go";
import { TfiCup } from "react-icons/tfi";
import CounterBox from "./CounterBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CouponFooter from "./CouponFooter";
import { Link } from "react-router-dom";
const Home = () => {
  const [likes, setLikes] = useState({});
  const { value, itm, loading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itm.length === 0) {
      dispatch(fetchUserById());
    }
  }, [dispatch, itm.length]);

  const dataset = (itm) => {
    dispatch(addCart(itm));
    toast.success("Item added into cart");
  };
  const likeHandle = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <ToastContainer />

      {/*------------------------------ banner section start --------------------*/}
      <div className="bg-colr ">
        <div className="bannersection ">
          {/* <img src="https://cdn.shopify.com/s/files/1/2436/2937/articles/12.jpg?v=1509177011" alt="" /> */}
          <div className="container">
            <div className="banner-conatent">
              <h2>Raining Offers For Hot Summer!</h2>
              <h5>25% Off On All Products</h5>
              <Link to="/shop">
              <button className="bg-white hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Shop Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section>
        {/* -----------------------------shipping section start */}
        <div className="best-services w-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10 aos-init aos-animate">
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span className=" h-32 w-32 text-rose-300">
                  <FaLuggageCart className="iconCart" />
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Free Shipping
                </p>
                <p className="text-sm text-qgray text-white">
                  When ordering over $100{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span className=" h-32 w-32 text-rose-300">
                  <IoRefreshSharp className="iconCart" />
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Free Return
                </p>
                <p className="text-sm text-qgray text-white">
                  Get Return within 30 days{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span className=" h-32 w-32 text-rose-300">
                  <GoShieldLock className="iconCart" />
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Secure Payment
                </p>
                <p className="text-sm text-qgray text-white">
                  100% Secure Online Payment{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span className=" h-30 w-32 text-rose-300">
                  <TfiCup className="iconCart" />
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Best Quality
                </p>
                <p className="text-sm text-qgray text-white">
                  Original Product Guarenteed{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------category section --------------- */}
        <div className="mt-10 container mx-auto w-full flex flex-col justify-center align-middle">
          <p className=" text-center pt-16 ">See Our Collections</p>
          <h2 className="text-3xl font-bold text-center pb-3">
            Special Category
          </h2>
          <CategoryPage />
        </div>

        {/* ------------------------count down section --------------- */}
        <CounterBox />

        {/*-------------------- Featured product --------------------*/}
        <div className="container py-12 ">
          <h2 className="font-bold text-3xl my-8 text-center">
            Featured products
          </h2>
          <div className="card-contentr2 ">
            {loading ? (
              <div className="card-contentr1">
                {[...Array(4)].map((_, index) => (
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                    key={index}
                  >
                    <Skeleton count={1} width={300} height={200} />
                    <Skeleton count={3} width={300} height={10} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="slider-container">
                 <Slider {...settings}>
                  {
                     itm.map((itms, id) => (
                      <ProductCard  
                      key={id}
                        image={itms.image}
                        id={id}
                        price={itms.price}
                        itms={itms}
                        likes={likes}
                        title={itms.title}
                        likeHandle={likeHandle}
                        dataset={dataset}
                      />
                    ))
                  }
                 </Slider>
              </div>
            )}
          </div>
        </div>

        {/* ------------------coupn code footer -----------------*/}
        <CouponFooter />
      </section>
    </>
  );
};

export default Home;
