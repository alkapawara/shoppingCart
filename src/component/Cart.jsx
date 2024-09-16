import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { delItm } from '../redux/cartSlice';
import { decremtItm,incrmnttItm,emptyCart } from '../redux/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash ,faMinus,faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {

  const dispatch=useDispatch();
    const { cartItm, error } = useSelector((state) => state.cart);
    const [totalprice,setPrice] = useState(0);
    const [totalquntity,setTotalquntity] = useState(0);
    if (error) {
        return <p>Error: {error}</p>;
      }
    
      if (!cartItm || cartItm.length === 0) {
        return <p className='font-bold text-xl my-8 text-center'>
          Your cart is empty. <Link to={'/'}><span className='font-bold text-blue-600 '>  Back to Shopping</span></Link></p>;
      }

      const handelDel=(id)=>{
        dispatch(delItm(id))
        console.log(id)
      }
  //  const HandelIncr=(id)=>{
  //     dispatch()
  //  }
const HandelDecr=(id)=>{
  dispatch(decremtItm(id))
}
   const HandelIncrt =(id)=>{
    dispatch(incrmnttItm(id))
   }

      // count total price
      const total = ()=>{
        let totalprice = 0
          cartItm.map((ele,ind)=>{
            totalprice = ele.price * ele.qty + totalprice
        });
        setPrice(totalprice)
    }  
  useEffect(()=>{
    total()
  },[total])

  // total cart itms
  const totalItm=()=>{
let totalquntity=0
cartItm.map((ele,ind)=>{
  totalquntity = ele.qty + totalquntity
});
setTotalquntity(totalquntity)
  }
  useEffect(()=>{
    totalItm()
  },[totalItm])
  return (
    <>
    <div className='container'>
      <h2 className='font-bold text-3xl my-8 text-center'>Cart Itms</h2>
      <Link to={'/'}><span className='font-bold'> <FontAwesomeIcon icon={faArrowLeft} /> Back to Shopping</span></Link>
      <button className='bg-yellow-300 p-1.5 float-right mb-1.5' onClick={()=>dispatch(emptyCart())} style={{cursor:"pointer"}}>Remove cart <FontAwesomeIcon icon={faTrash} /></button>
    <table className="shadow-lg table-auto w-full bg-white border border-gray-300 text-center">
  <thead className='bg-pink-500 text-white'>
    <tr>
      <th className='border border-gray-300 px-4 py-2'>Action </th>
      <th className='border border-gray-300 px-4 py-2' >Item</th>
      <th className='border border-gray-300 px-4 py-2'>Title</th>
      <th className='border border-gray-300 px-4 py-2'>Quntity</th>
      <th className='border border-gray-300 px-4 py-2'>Price</th>
      <th className='border border-gray-300 px-4 py-2'>Total</th>
    </tr>
   
  </thead>
  <tbody className='text-center'>
    {cartItm.map((item,id) => (
      <tr key={id}>
      <td className="border border-slate-300"><button onClick={()=>handelDel(item.id)}> <FontAwesomeIcon icon={faTrash} /></button></td>
      <td  className="border border-slate-300"><div className='imgDiv'><img src={item.image}/></div></td>
      <td className="border border-slate-300">{item.title}</td>
      <td className="border border-slate-300"> <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"12px"}}>
      <button type='button' onClick={()=>HandelDecr(item)}><FontAwesomeIcon icon={faMinus} /></button>
      {item.qty}
      {/* <input type="text" className='qty-input-box' value={item.qty} disabled name="" id="" /> */}
      <button onClick={()=>HandelIncrt(item)} ><FontAwesomeIcon icon={faPlus} /></button>
        </div></td>
      <td className="border border-slate-300">&#x20b9;{item.price}</td>
      <td className="border border-slate-300">&#x20b9;{(item.price * item.qty).toFixed(2)}</td>
      </tr> 
      
      
    ))
    
    }
    <tr>
      <td colSpan={4} className="border border-slate-300"> </td>
      <td className="border border-slate-300"><b>Items In Cart: <span style={{color:"red"}}>{totalquntity}</span> </b></td>
      <td className="border border-slate-300"><b>Total Price: <span style={{color:"red"}}>{(totalprice).toFixed(2)}</span> </b></td>
    
    </tr>
    
  </tbody>
    </table>
    </div>

    
    </>
  )
}

export default Cart