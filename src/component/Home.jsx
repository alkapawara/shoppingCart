import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../redux/cartSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { addCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCart4 } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { LiaSearchPlusSolid } from "react-icons/lia";
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
  return (
    <>
      <ToastContainer />
      <div className="bg-colr ">
        <div className="bannersection ">
          {/* <img src="https://cdn.shopify.com/s/files/1/2436/2937/articles/12.jpg?v=1509177011" alt="" /> */}
          <div className="container">
            <div className="banner-conatent">
              <h2>Raining Offers For Hot Summer!</h2>
              <h5>25% Off On All Products</h5>
              <button className="bg-white hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
{/* <div>
<h2 className="font-bold text-3xl my-8 text-center">
Shop by category
          </h2>

</div> */}

        <div className="container py-12">
          <h2 className="font-bold text-3xl my-8 text-center">
            Featured products
          </h2>
          <div className="card-contentr">
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
              itm.map((itms, id) => (
                <div
                style={{boxShadow: "0px 0px 9px 3px #6633991f"
                }}
                  className="px-8 py-2 flex justify-center flex-col items-center relative rounded-2xl border "
                  key={itms.id}
                >
                 
                    <div className="img-box hover:scale-110 transition-all ease-in cursor-zoom-in ">
                      <img src={itms.image} style={{ width: "100%" }} />
                    </div>

                
                    <p className="title-product font-bold">{itms.title}</p>
                    <p className="text-center">
                      <b>&#x20b9;{itms.price}</b>
                    </p>
                 
                 <div className="flex gap-2 py-2 ">
 
                   <div  
                   onClick={() => dataset(itms)}
                  className=" bg-slate-900 bg-opacity-20 p-3  rounded font-bold cursor-pointer">
                <BsCart4 />
                </div>
                  <div
                    onClick={() => likeHandle(itms.id)}
                    className={` bg-red-400 pointer  p-3 rounded cursor-pointer
                      ${
                        likes[itms.id] ? "bg-opacity-24" : "bg-opacity-20"
                      }`}
                  >
                    <GoHeartFill color={likes[itms.id] ? "white" : "grey"} />
                  </div>
                  <Link to={`/cart/${id}`}>
                  <div className="bg-slate-900 bg-opacity-20  p-3  rounded font-bold">
                    <LiaSearchPlusSolid />
                  </div>
                  </Link>
                  
            </div>

           
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
