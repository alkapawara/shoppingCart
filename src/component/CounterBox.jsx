import React, { useEffect, useRef,useState } from 'react'
import { Link } from 'react-router-dom'
const CounterBox = () => {
    const[timeDay,setTimeDay]=useState("00")
    const[timeHours,setTimeHours]=useState("00")
    const[timeMinute,setTimeMinute]=useState("00")
    const[timeSecond,setTimeSecond]=useState("00")
    let intervl=useRef()
    const startTimer=()=>{
        const countDate=new Date('December 20, 2024 00:00:00')
        intervl =setInterval(()=>{
            const now=new Date().getTime()
            const distance=countDate-now;
            const days=Math.floor(distance/(1000*60*60*24))
            const hours=Math.floor((distance % (1000*60*60*24)/(1000*60*60)))
            const mins=Math.floor((distance%(1000*60*60))/(1000*60))
            const secs=Math.floor((distance%(1000*60))/1000)
            if(distance<0){
                clearInterval(intervl.current)
            }
            else{
                setTimeDay(days)
                setTimeHours(hours)
                setTimeMinute(mins)
                setTimeSecond(secs)
            }
        },1000)
    }

        useEffect(()=>{
            startTimer()
            return ()=>{
                clearInterval(intervl.current)
            }
        },[])
  return (
    <div className='w-full lg:h-[460px] mb-6 mt-20'>
        <div className='container mx-auto h-full'>
            <div className='items-center h-full'>
                <div className='campaign-countdown h-full w-full mb-5 lg:mb-0 aos-init aos-animate'>
                    <div className='w-full xl:p-12 p-5'>
                        <div className='countdown-wrapper w-full flex space-x-[23px] mb-10'>
                            <div className='countdown-item'>
                                <div className='countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center'>
                                    <span className='font-[700] sm:text-[30px] text-[14px] text-[#EB5757]'>{timeDay}</span>
                                </div>
                                <p className='sm:text-[18px] text-[12px] font-[500] text-center leading-8'>Days</p>
                            </div>
                            <div className='countdown-item'>
                                <div className='countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center'>
                                    <span className='font-[700] sm:text-[30px] text-[14px] text-[#EB5757]'>{timeHours}</span>
                                </div>
                                <p className='sm:text-[18px] text-[12px] font-[500] text-center leading-8'>Hours</p>
                            </div>
                            <div className='countdown-item'>
                                <div className='countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center'>
                                    <span className='font-[700] sm:text-[30px] text-[14px] text-[#EB5757]'>{timeMinute}</span>
                                </div>
                                <p className='sm:text-[18px] text-[12px] font-[500] text-center leading-8'>Minutes</p>
                            </div>
                            <div className='countdown-item'>
                                <div className='countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center'>
                                    <span className='font-[700] sm:text-[30px] text-[14px] text-[#EB5757]'>{timeSecond}</span>
                                </div>
                                <p className='sm:text-[18px] text-[12px] font-[500] text-center leading-8'>Seconds</p>
                            </div>
                        </div>
                        <div className='countdown-title mb-4'>
                            <h1 className='text-[44px] text-qblack font-medium'>WOO! Flash Sale</h1>
                            <p className='text-[18px] text-qblack leading-7'>You get into the 2k+ best Products in Flash offer with
                                <br/>
                                a special-shaped sofa for sale.
                            </p>
                        </div>
                        <Link to="/shop">
              <button className="bg-white hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Shop Now
              </button>
              </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CounterBox