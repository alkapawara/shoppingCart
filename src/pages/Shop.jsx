import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../component/ProductCard'
import { fetchUserById,updateFilteredItems,addCart } from "../redux/cartSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CounterBox from "../component/CounterBox";
import { ToastContainer, toast } from "react-toastify";
CounterBox
const Shop = () => {
    const [likes, setLikes] = useState({});
    const { value, itm, loading,filteredItems } = useSelector((state) => state.cart);
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
    
       // Filter items by category
  const filterItm = (category) => {
    const updatedItems = category === "All" ? itm : itm.filter((item) => item.category === category);
    dispatch(updateFilteredItems(updatedItems)); // Ensure you have an action to update the filtered items
  };

  return (
    <div className="container -mt-16">
      <ToastContainer />
     <CounterBox />
     <div className="flex gap-2 justify-center">
     <button onClick={() => filterItm("All")} className="bg-red-400 text-white py-2 px-3 rounded-sm hover:text-slate-900">All</button>
        <button onClick={() => filterItm("women's clothing")} className="bg-red-400 text-white py-2 px-3 rounded-sm hover:text-slate-900">Women</button>
        <button onClick={() => filterItm("men's clothing")} className="bg-red-400 text-white py-2 px-3 rounded-sm hover:text-slate-900">Men</button>
        <button onClick={() => filterItm("jewelery")} className="bg-red-400 text-white py-2 px-3 rounded-sm hover:text-slate-900">Jewelry</button>
        <button onClick={() => filterItm("electronics")} className="bg-red-400 text-white py-2 px-3 rounded-sm hover:text-slate-900">Electronics</button>
     </div>
    <div className="card-contentr  py-12 ">
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
        filteredItems.map((itms, id) => (
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
      )}
    </div>
  </div>
  )
}

export default Shop