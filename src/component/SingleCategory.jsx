import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../component/ProductCard'
import { fetchUserById } from "../redux/cartSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleCategory = () => {
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
    <div className="container ">
        <h2>Categories</h2>
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
     )}
   </div>
 </div>
  )
}

export default SingleCategory