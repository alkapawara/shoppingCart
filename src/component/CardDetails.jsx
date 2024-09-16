import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { cartItms } from '../redux/cartSlice'
import styles from './CardDetails.module.css';
import { addCart } from '../redux/cartSlice'
const CardDetails = () => {
    const { id } = useParams();
    const apiId = Number(id) + 1; // Adjust the ID to match the API starting from 1
    console.log('API ID', apiId);

    const dispatch=useDispatch();

    const dataset=(itm)=>{
        dispatch(addCart(itm))
    }
    
    const item = useSelector((state) => 
        state.cart.itm.find((itm) => itm.id === apiId)
    
    );

    if (!item) {
        return <div>Item not found</div>; 
    }

    return (
        <div className='container'>
            <Link to='/' > <h5 className='mt-4 p-0'> Back</h5></Link>
            

           
            <div  className={styles.cardbox}>
            <div className={styles.productDtailsimgBox}>
            <img src={item.image} alt={item.title} /> 
            </div>
            
           <div className={styles.cartContent}>
           <h2 style={{fontWeight:"500",fontSize:"1.75rem"}}>{item.title}</h2>
            <p>{item.description}</p> 
            <p style={{fontSize:"1.25rem"}}><b>&#x20b9;{item.price}</b></p>
            <button className="bg-pink-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dataset(item)}>add</button>
           </div>

           
            </div>
           
            
        </div>
      
    );
}

export default CardDetails;
