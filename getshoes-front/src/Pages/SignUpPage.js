import React from 'react'
import shoes from "../images/shoesimage3.jpg"

import { MdSportsBaseball } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
    <div className='w-[100%] h-[100%] xl:flex-row flex-col-reverse flex justify-center items-center'>
        <div className='w-[100%]  xl:w-[45%] 2xl:w-[40%] xl:h-[100%] lg:h-[70%] md:h-[75%] h-[100%] flex justify-center items-center'>
            <div className='w-[90%] h-[100%] flex flex-col justify-center items-center'>
              
                <div className='w-[100%] h-[100%] flex flex-col justify-center items-center '>
                   <div className='w-[100%] h-[90%] md:h-[100%]  flex flex-col justify-center items-center gap-2'>
                   
                   <p className=" text-[2.5em] 3xl:text-[3em] 4xl:text-[4em]"><MdSportsBaseball /></p>
                   <p className="text-[2em] md:text-[2em] 3xl:text-[1.8em] 4xl:text-[2.5em]  font-semibold">GetShoes</p>
                
                    <form className='w-[95%] md:w-[70%] xl:w-[80%] lg:w-[95%] 3xl:w-[75%] justify-center  flex gap-3 md:gap-4 flex-col'>
                       
                        <div className='flex flex-col gap-2'>
                        <label className='text-[1.5em] 3xl:text-[1.7em] 4xl:text-[2em] font-normal'>Name</label>
                        <input className='h-[5vh] xl:h-[6vh] text-[1.2em] 3xl:text-[1.5em] 4xl:text-[1.5em] outline-none border-2 border-[#54545429] pl-3 p-2' type='text' placeholder='Enter a Name' />
                        </div>
                        <div className='flex flex-col gap-2'>
                        <label className='text-[1.5em] 3xl:text-[1.7em] 4xl:text-[2em] font-normal'>Email</label>
                        <input className='h-[5vh] xl:h-[6vh] text-[1.2em] 3xl:text-[1.5em] 4xl:text-[1.5em] outline-none border-2 border-[#54545429] pl-3 p-2' type='email' placeholder='Enter a Email' />
                        </div>
                        <div className='flex flex-col gap-2'>
                        <label className='text-[1.5em] 3xl:text-[1.7em] 4xl:text-[2em] font-normal'>Password</label>
                        <input className='h-[5vh] xl:h-[6vh] text-[1.2em] 3xl:text-[1.5em] 4xl:text-[1.5em] outline-none border-2 border-[#54545429] pl-3 p-2' type='password' placeholder='Enter a Password' />
                        </div>

                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                <input type='checkbox' className='w-5 h-5 3xl:w-6 3xl:h-6 4xl:w-8 4xl:h-8 border-2 border-[#2b2b2b4c] appearance-none bg-white  checked:bg-[#000] rounded-[0px] checked:rounded-[50%] duration-1000 transition-1' />
                                <p className='font-medium 3xl:text-[1.18em]'>Remember me</p>
                            </div>
                            <div>
                                <p className='font-medium text-md 4xl:text-[1.1em]'>Forgot Password?</p>
                            </div>
                        </div>
                        <button className='w-full h-[6vh] text-[1.2em] 3xl:text-[1.5em] bg-black text-white'>
                            Sign In
                        </button>
                        <button className='w-full h-[6vh] text-[1.2em] border-2 3xl:text-[1.3em] 4xl:text-[1.5em] border-[#54545429] bg-white text-black justify-center items-center flex'>
                        <p className='4xl:text-[1.5em] 3xl:text-[1.3em] text-[1.2em]'><FcGoogle /> </p> Sign In With Google
                        </button>
                        <div className='w-full flex justify-center items-center'>
                        <p className='opacity-65 3xl:text-[1.3em] text-[1.2em]'>Do you have account? <span className='text-green-500'><Link to="/signin">Sign In</Link></span></p>
                    </div>
                    </form>
              
                   </div>
                </div>
            </div>
        </div>
        <div className='w-[100%]  2xl:w-[70%] xl:w-[55%] xl:h-[100%] lg:h-[30%] md:h-[25%] hidden md:flex justify-center items-center'>
            <img src={shoes} className='w-full h-full object-cover'/>
        </div>
    </div>
</div>
  )
}
