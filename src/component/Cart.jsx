import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delItm } from "../redux/cartSlice";
import { decremtItm, incrmnttItm, emptyCart } from "../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faMinus,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItm, error } = useSelector((state) => state.cart);
  const [totalprice, setPrice] = useState(0);
  const [totalquntity, setTotalquntity] = useState(0);
  const delFee=10;
  const navigate= useNavigate();
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!cartItm || cartItm.length === 0) {
    return (
      <p className="font-bold text-xl my-8 text-center">
        Your cart is empty.{" "}
        <Link to={"/"}>
          <span className="font-bold text-blue-600 "> Back to Shopping</span>
        </Link>
      </p>
    );
  }

  const handelDel = (id) => {
    dispatch(delItm(id));
    console.log(id);
  };
  //  const HandelIncr=(id)=>{
  //     dispatch()
  //  }
  const HandelDecr = (id) => {
    dispatch(decremtItm(id));
  };
  const HandelIncrt = (id) => {
    dispatch(incrmnttItm(id));
  };

  // count total price
  const total = () => {
    let totalprice = 0;
    cartItm.map((ele, ind) => {
      totalprice = ele.price * ele.qty + totalprice;
    });
    setPrice(totalprice);
  };
  useEffect(() => {
    total();
  }, [total]);

  // total cart itms
  const totalItm = () => {
    let totalquntity = 0;
    cartItm.map((ele, ind) => {
      totalquntity = ele.qty + totalquntity;
    });
    setTotalquntity(totalquntity);
  };
  useEffect(() => {
    totalItm();
  }, [totalItm]);
   const emptyCartFun=()=>{
    dispatch(emptyCart());
    navigate('/')
   }
  return (
    <>
      <div className="container">
        <h2 className="font-bold text-3xl my-8 text-center">Cart Itms</h2>
        <div className="flex lg:justify-between gap-1">
        <Link to={"/"}>
          <span className="font-bold">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Shopping
          </span>
        </Link>
        <button
          className="bg-yellow-300 p-1.5  mb-1.5"
          onClick={emptyCartFun}
          style={{ cursor: "pointer" }}
        >
          Remove cart <FontAwesomeIcon icon={faTrash} />
        </button>
        </div>
        <div className="overflow-x-auto">
        <table className=" table-auto w-full bg-white border border-gray-300 text-center">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Action </th>
              <th className="border border-gray-300 px-4 py-2">Item</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Quntity</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {cartItm.map((item, id) => (
              <tr key={id}>
                <td className="border border-slate-300">
                  <button onClick={() => handelDel(item.id)}>
                    {" "}
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
                <td className="border border-slate-300">
                  <div className="imgDiv">
                    <img src={item.image} />
                  </div>
                </td>
                <td className="border border-slate-300">{item.title}</td>
                <td className="border border-slate-300">
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <button type="button" onClick={() => HandelDecr(item)}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="">{item.qty}</span>
                    {/* <input type="text" className='qty-input-box' value={item.qty} disabled name="" id="" /> */}
                    <button onClick={() => HandelIncrt(item)}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </td>
                <td className="border border-slate-300">
                  &#x20b9;{item.price}
                </td>
                <td className="border border-slate-300">
                  &#x20b9;{(item.price * item.qty).toFixed(2)}
                </td>
              </tr>
            ))}
           
          </tbody>
        </table>
        </div>
        

        <div className="w-full lg:w-1/3 mt-12" >
          <h6 style={{fontWeight:'700',fontSize:"1.45rem"}}>Cart Total</h6>
        
                <div style={{display:"flex", justifyContent:"space-between",lineHeight:"2"}}>
                Items In Cart:{" "}
                <span > {totalquntity}</span>{" "}
                </div>
                <hr/>
                <div style={{display:"flex", justifyContent:"space-between",lineHeight:"2",}}>
                Sub Total :{" "}
                  <span >&#x20b9; {totalprice.toFixed()}</span>{" "}
                </div>
                <hr/>
                <div style={{display:"flex", justifyContent:"space-between",lineHeight:"2"}}>
                Delivery Fee:{" "}
                <span>&#x20b9; {delFee}</span>{" "}
                </div>
                <hr/>
                <div style={{display:"flex", justifyContent:"space-between",lineHeight:"2",fontWeight:"700"}}>
               Total :{" "}
                  <span>&#x20b9; {(Number(totalprice.toFixed()) + delFee).toFixed()}</span>{" "}
                </div>
                <button className="w-full lg:w-2/3" style={{marginTop:"1rem",backgroundColor:"#fde047",padding:'0.35rem 1rem',fontWeight:"500",borderRadius:"6px"}}>Proced to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
