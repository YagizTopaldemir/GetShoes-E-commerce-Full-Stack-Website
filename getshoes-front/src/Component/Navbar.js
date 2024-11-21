import React, { useEffect, useState } from 'react'
import { MdSportsBaseball } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";




export default function Navbar() {
  const [seacrh,setSearch] = useState("");
  const [menuopen,setMenuopen] = useState(false);

  const searchdata = [
    {id:1,searchtitle:"Nike Tech Hera Kadın Gri/Bordo Spor Ayakkabı"},
    {id:2,searchtitle:"Nike Tech Hera Kadın Gri/Bordo Spor Ayakkabı"},
    {id:3,searchtitle:"Nike Tech Hera Kadın Gri/Bordo Spor Ayakkabı"},
    {id:4,searchtitle:"Nike Tech Hera Kadın Gri/Bordo Spor Ayakkabı"},  
  ]

  const category = [
    {id:1,cate:"Women"},
    {id:2,cate:"Men"},
    {id:3,cate:"Kids"},
    {id:4,cate:"Sports"},  
    {id:5,cate:"New"},  
  ]


  const handlemenuopen = () => {
    setMenuopen(!menuopen);
  }


  useEffect(() => {
    if (menuopen) {
      document.body.style.overflowY = 'hidden'; 
    } else {
      document.body.style.overflowY = 'auto'; 
    }

    return () => {
      document.body.style.overflowY = 'auto'; 
    };
  }, [menuopen]);

  return (
    <div className='w-[100vw] min-h-[10vh]  flex justify-center '>
      <div className='w-[100%] min-h-[10vh]  pb-1  flex justify-center items-center flex-col'>
        
        <div className='hidden lg:flex w-[85%] 4xl:w-[85%] h-[4vh] justify-between items-end'>
          <div className='flex flex-row justify-center items-center gap-3 text-lg opacity-60'>
          <p className='cursor-pointer'><FaFacebookSquare /></p>
          <p className='cursor-pointer'><AiFillInstagram /></p>
          <p className='cursor-pointer'><FaSquareXTwitter /></p>
          <p className='cursor-pointer'>    <FaYoutube /></p>
          </div>
          <div className='flex flex-row justify-start  items-center gap-5 text-sm opacity-60'>
            <p className='cursor-pointer'>About us</p>
            <p className='cursor-pointer'>Help</p>
            <p className='cursor-pointer'>Setnate</p>
          </div>
        </div>
        {/* lg and above width */}
        <div className=' w-[85%] 4xl:w-[85%] h-[9vh] hidden lg:flex justify-between items-center flex-row '>
          <h1 className='flex flex-row items-center  justify-start 4xl:text-3xl text-xl font-medium gap-1 w-[33%] '><p className='text-3xl '><MdSportsBaseball /></p>GetShoes</h1>
          <div className='flex flex-row justify-center items-center  w-[33%]'>
            <button className='w-[3vw] 3xl:h-[4vh] 4xl:h-[5vh]  lg:h-[4vh] 2xl:h-[5vh] bg-[#c3c3c332] flex justify-center rounded-l-md 4xl:rounded-r-lg items-center text-2xl text-[#6d6d6d9c]'><IoMdSearch /></button>
            <input
            onChange={e => setSearch(e.target.value)}
            className='2xl:h-[5vh] lg:h-[4vh] 3xl:h-[4vh] 4xl:h-[5vh] lg:w-[25vw] xl:w-[20vw] bg-[#c3c3c332] text-[#000] outline-none rounded-r-md 4xl:rounded-r-lg'
             type='text' placeholder='Nike air force 1...' />

          </div>
          <div className=' w-[33%] flex justify-end items-center flex-row gap-4 4xl:gap-6'>
            <div className='flex flex-col justify-center items-center cursor-pointer hover:opacity-55'>
              <p className='text-xl'><FaCartShopping /></p>
              <p>Cart</p>
            </div>
            <div className='flex flex-col justify-center items-center cursor-pointer hover:opacity-55'>
              <p className='text-xl '><BsFillHeartFill /></p>
              <p >Favorites</p>
            </div>
            <div className='w-11 h-11 bg-[#c3c3c332] rounded-[50%] flex justify-center items-center cursor-pointer hover:opacity-55'>
            <p className='text-2xl'><BsFillPersonFill /></p>
            </div>
          </div>
        </div>
        <div className='w-[85%] 4xl:w-[85%]   pb-2 hidden lg:flex justify-start items-start gap-7 4xl:gap-9'>
          {category.map((cate) => (
            <div className='flex justify-center items-center font-medium hover:text-green-400' key={cate.id}>
              {cate.cate}
            </div>
          ))}
         </div>

         {/* md and below width */}
         <div className='w-[85%] h-[10vh] lg:hidden flex justify-between items-center'>
          <div className='felx items-center justify-start'><h1 className='flex flex-row items-center  justify-start 4xl:text-3xl text-xl md:text-3xl font-medium gap-1 w-[33%] '><p className='text-[1.4em] '><MdSportsBaseball /></p>GetShoes</h1></div>
          <div className='flex items-center '>
            {menuopen ? 
            (
              <div
              onClick={handlemenuopen}
              className='flex justify-center items-center text-[2em] cursor-pointer hover:opacity-50'>
              <IoCloseSharp />
              </div>
            ) : 
            (
              <div
              onClick={handlemenuopen}
              className='flex justify-center items-center text-[2em] cursor-pointer hover:opacity-50 '>
              <MdOutlineMenu />
              </div>
            )
            }
          </div>
         </div>
      </div>
      
      {
        menuopen ? 
        (
          <div className='lg:hidden flex absolute w-[100%] h-[90vh] mt-[10vh] overflow-y-hidden z-50 bg-[#f5f5f5] justify-center items-start'>
            <div className='w-[95%] md:w-[95%] min-h-[50%] flex justify-between items-center flex-col gap-10 '>
              <div className='w-[100%] flex justify-start items-center flex-col gap-2'>
                {category.map((cate) => (
                  <div className='w-[100%] h-[2vh] md:p-10 p-5 flex justify-between items-center   hover:text-green-400 hover:opacity-55' key={cate.id}>
                    <p className='md:text-3xl text-xl'>{cate.cate}</p>
                    <p className='md:text-2xl text-lg'><SlArrowRight /></p>
                  </div>
                ))}
              </div>
         
              <div className=' w-[100%] flex justify-center items-center md:items-start flex-col md:flex-row gap-3 '>
            <div className='flex flex-row justify-center items-center cursor-pointer hover:opacity-55 gap-2 rounded-md w-[90%] md:w-[30%] h-12 md:h-14 p-1 bg-[#000000]'>
              <p className='text-2xl md:text-3xl text-white'><FaCartShopping /></p>
              <p className='text-xl text-white'>Cart</p>
            </div>
            <div className='flex flex-row justify-center items-center cursor-pointer hover:opacity-55 gap-2 rounded-md w-[90%] md:w-[30%] h-12 md:h-14 p-1 bg-[#000000]'>
              <p className='text-2xl md:text-3xl text-white'><BsFillHeartFill /></p>
              <p className='text-xl text-white'>Favorites</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2 rounded-md hover:opacity-55 w-[90%] md:w-[30%] h-12 md:h-14 p-1 bg-[#000000]'>
        
            <p className='text-2xl md:text-2xl text-white'><BsFillPersonFill /></p>
  
            <p className=' text-white'>Profile</p>
            </div>
          </div>
              </div>
         
          </div>
        )
        :
        (
          <div className='hidden'></div>
        )
      }

      {
       !seacrh ? 
       (
          <div className='hidden absolute z-10 lg:w-[28vw] xl:w-[23vw] min-h-[5vh] gap-1   mt-[10vh] rounded-lg justify-center items-center flex-col'>
          {searchdata.map((searchtitle) => (
            <div className='w-[100%] flex items-center bg-[#ededed] justify-center h-12 hover:opacity-40  ' key={searchtitle.id}>
              <p className=''>{searchtitle.searchtitle.slice(0,40)}</p>
            </div>
          ))}
        </div>
        ) : 
        (
          <div className='hidden lg:flex absolute z-10 lg:w-[28vw] xl:w-[23vw] min-h-[4vh] gap-1 3xl:gap-2 4xl:mt-[12vh] lg:mt-[11vh] xl:mt-[12vh] rounded-[20px]  justify-center items-center flex-col'>
          {searchdata.map((searchtitle) => (
            <div className='w-[100%] flex items-center bg-[#ededed] justify-center h-12 hover:opacity-40' key={searchtitle.id}>
              <p className='text-sm xl:text-[1.05em]'>{searchtitle.searchtitle.slice(0,40)}</p>
            </div>
          ))}
        </div>
        )
      }
    </div>
  )
}
