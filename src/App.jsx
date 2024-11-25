import React from 'react'
import './App.css'
import Cart from './component/Cart'
import Home from './component/Home'
import Nabar from './component/Nabar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CardDetails from './component/CardDetails'
import Shop from './pages/Shop'
import CouponFooter from './component/CouponFooter'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nabar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route eaxct path='/cart' element={<Cart />} />
      <Route eaxct path='/shop' element={<Shop />} />
     <Route path='/cart/:id' element={<CardDetails />}/>
      
    </Routes>
    {/* <CouponFooter /> */}
    </BrowserRouter>
    </>
  )
}

export default App