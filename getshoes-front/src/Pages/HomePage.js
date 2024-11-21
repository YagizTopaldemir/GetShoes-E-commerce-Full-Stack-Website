import React, { useEffect } from 'react'

import shoesimg from "../images/homepageshoes.jpg"

export default function HomePage() {
  useEffect(() => {
    document.title = "GetShoes | Home";
  }, []);
  
  return (
    <div className='min-h-[80vh] mt-2 w-[100vw] flex justify-center items-center flex-col '>
      <div className='w-[85%] 4xl:w-[85%] h-[85vh] lg:h-[75vh] flex justify-center items-center rounded-xl bg-black'>
        <img src={shoesimg} className='w-full h-full object-cover opacity-70 rounded-xl' />
        <p className='flex absolute text-[#f5f5f5] text-[4em] lg:text-[6em] font-bold lg:tracking-[30px] text-whi'>GETSHOES</p>
      </div>
  
      <div className='w-[85%] min-h-[120vh] flex justify-between items-start flex-row  bg-red-400 mt-[10vh]'>
        <div className='w-[30%] min-h-[80vh] bg-green-400'></div>
        <div className='w-[65%] min-h-[100vh] bg-slate-300'></div>
      </div>
    </div>
  )
}
