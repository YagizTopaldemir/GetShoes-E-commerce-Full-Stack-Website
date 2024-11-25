import React, { useEffect, useState } from 'react'
import { SlArrowRight } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";


import shoesimg from "../images/homepageshoes.jpg"

export default function HomePage() {
  const [filet1,setFilter1] = useState(false)
  const [filet2,setFilter2] = useState(false)
  const [filet3,setFilter3] = useState(false)

  useEffect(() => {
    document.title = "GetShoes | Home";
  }, []);


  const filetcolor = [
    {id:1,colorname:"White"},
    {id:2,colorname:"Red"},
    {id:3,colorname:"Blue"},
    {id:4,colorname:"Purple"},
  ]

  const brand = [
    {id:1,brandname:"Nike"},
    {id:2,brandname:"Adidas"},
    {id:3,brandname:"Puma"},
    {id:4,brandname:"Balanciaga"}
  ]

  

  return (
    <div className='min-h-[80vh] mt-2 w-[100vw] flex justify-center items-center flex-col '>
      <div className='w-[85%] 4xl:w-[85%] h-[85vh] lg:h-[75vh] flex justify-center items-center rounded-xl bg-black'>
        <img src={shoesimg} className='w-full h-full object-cover opacity-70 rounded-xl' />
        <p className='flex absolute text-[#f5f5f5] text-[4em] lg:text-[6em] font-bold lg:tracking-[30px] text-whi'>GETSHOES</p>
      </div>
  
      <div className='w-[85%] min-h-[120vh] flex justify-between items-start flex-row   mt-[10vh] rounded-lg'>
        <div className='w-[20%] min-h-[30vh] pb-5 bg-white rounded-lg pt-5 flex justify-start flex-col items-center'>
          <h1 className='text-2xl font-medium'>Filtre</h1>
          <div className='w-[80%] flex justify-start items-center flex-col mt-5 '>
            <div  className='w-[100%] min-h-[5vh] '>
              <div onClick={() => setFilter1(!filet1)} className='flex justify-between items-center flex-row'>
                <p className='text-xl font-medium'>Fiyat</p>
                <p className='text-lg font-medium'><SlArrowRight /></p>
              </div>
              {filet1 ? 
              (<div className='flex w-[100%] min-h-[9vh]  justify-start items-center overflow-hidden mt-2 pt-3    rounded-lg  flex-col'>
                <div className='flex w-[90%] overflow-hidden'>
                <div className='flex flex-row gap-2'>
                  <input type='number' className='outline-none bg-[#f5f5f5] w-[60px] pl-1 rounded-lg border-2 border-[#c4c4c4]' placeholder='Less' />
                  <p> - </p>
                  <input type='number' className='outline-none bg-[#f5f5f5] w-[60px] pl-1 rounded-lg border-2 border-[#c4c4c4]' placeholder='Most' />
                  <button className='w-8 h-8 rounded-lg flex justify-center items-center bg-[#f5f5f5] border-2 border-[#c4c4c4]'>
                    <p className='text-[#838383]'><FaSearch /></p>
                  </button>
                </div>
                </div>
              </div>
            )
            :
            (
            <div className='hidden w-[100%] h-[8vh]'><h1>adad</h1></div>
            )}
            </div>
            <div  className='w-[100%] min-h-[5vh] '>
              <div onClick={() => setFilter2(!filet2)} className='flex justify-between items-center flex-row'>
                <p className='text-xl font-medium'>Renk</p>
                <p className='text-lg font-medium'><SlArrowRight /></p>
              </div>
              {filet2 ? 
              (<div className='flex w-[100%] min-h-[9vh] flex-wrap  justify-start items-start overflow-hidden mt-1 pt-2 pb-3 gap-3  rounded-lg bg-[#fff] flex-row'>
            
                {filetcolor.map((filtercol) => (
                    <div className='flex-col flex justify-center items-center gap-1 cursor-pointer' key={filtercol.id}>
                      <div className='border-2 w-10 h-10 rounded-lg border-[#c9c9c9]' style={{backgroundColor: filtercol.colorname}}></div>
                      <p>{filtercol.colorname}</p>
                    </div>
                ))}
              </div>
            )
            :
            (
            <div className='hidden w-[100%] h-[8vh]'><h1>adad</h1></div>
            )}
            </div>
            <div  className='w-[100%] min-h-[5vh] '>
              <div onClick={() => setFilter3(!filet3)} className='flex justify-between items-center flex-row'>
                <p className='text-xl font-medium'>Marka</p>
                <p className='text-lg font-medium'><SlArrowRight /></p>
              </div>
              {filet3 ? 
              (<div className='flex w-[100%] min-h-[9vh]  justify-start items-start flex-wrap overflow-hidden mt-2 pt-3 gap-2  rounded-lg bg-[#fff] flex-row'>
               {brand.map((brand) =>(
                <div className='min-w-[30%] flex justify-center items-center' key={brand.id}>
                  <p className='cursor-pointer'>{brand.brandname}</p>
                </div>
               ))}
              </div>
            )
            :
            (
            <div className='hidden w-[100%] h-[8vh]'><h1>adad</h1></div>
            )}
            </div>
          </div>
        </div>
        <div className='w-[75%] min-h-[100vh] bg-white rounded-lg pt-5 flex justify-center items-start'>
          <div className='w-[95%] min-h-[10vh]'>
          </div>
        </div>
      </div>
    </div>
  )
}
