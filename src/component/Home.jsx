import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../redux/cartSlice'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
import { addCart } from '../redux/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const { value, itm, loading } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        if (itm.length === 0) {
            dispatch(fetchUserById())
        }
    }, [dispatch, itm.length])

    const dataset = (itm) => {
        dispatch(addCart(itm))
        toast.success("Item added into cart")
    }

    return (
        <>
        <ToastContainer />
        <div className='bg-colr'>
        <div className="bannersection ">
                {/* <img src="https://cdn.shopify.com/s/files/1/2436/2937/articles/12.jpg?v=1509177011" alt="" /> */}
<div className='container'>
        <div className='banner-conatent'>
        <h2>Raining Offers For Hot Summer!</h2>
                <h5>25% Off On All Products</h5>
                <button className='bg-white hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Shop Now</button>
        </div>
</div>
               
            </div>
        </div>
         
            <section>
                <div className='container'>
                    <h2 className='font-bold text-3xl my-8 text-center'>Featured products</h2>
                    <div className='card-contentr'>
                        {
                            loading ? (
                                <div className='card-contentr1' >
                                    {[...Array(4)].map((_, index) => (
                                        <div style={{ display: "flex", flexDirection: "column" }} key={index}>
                                            <Skeleton count={1} width={300} height={200} />
                                            <Skeleton count={3} width={300} height={10} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                itm.map((itms, id) => (
                                    <div className='card-box flex justify-center flex-col items-center' key={itms.id}>
                                        <Link to={`/cart/${id}`} >
                                        <div className='img-box'>
                                            <img src={itms.image} style={{ width: "100%" }} />
                                        </div>
                                        <p className='title-product'>{itms.title}</p>
                                        <p style={{textAlign:"center"}}><b>&#x20b9;{itms.price}</b></p>
                                        </Link>
                                        <button className='bg-pink-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => dataset(itms)}>Add to cart</button>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
