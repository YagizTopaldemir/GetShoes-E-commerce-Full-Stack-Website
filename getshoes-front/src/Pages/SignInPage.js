import React from 'react'
import shoes from "../images/shoesimage3.jpg"

import { MdSportsBaseball } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";


export default function SignInPage() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
        <div className='w-[100%] h-[100%] flex justify-center items-center'>
            <div className='w-[40%] h-[100%] flex justify-center items-center'>
                <div className='w-[90%] h-[100%] flex flex-col justify-center items-center'>
                    <div className='w-[100%] h-[15%] flex justify-start items-center flex-row gap-1'>
                    <p className="text-[2.5em]"><MdSportsBaseball /></p>
                    <p className="text-[1.5em] font-semibold">GetShoes</p>
                    </div>
                    <div className='w-[100%] h-[85%] flex flex-col justify-center items-center '>
                       <div className='w-[100%] h-[80%] flex flex-col justify-center items-center gap-10'>
                       <div className='leading-none'>
                        <h1 className='text-center text-[3em] font-normal'>Welcome Back</h1>
                        <p className='text-center opacity-65 text-[1.1em]'>Get Best Shoes On Earth</p>
                        </div>
                        <form className='w-[70%] min-h-[85%] flex gap-4 flex-col'>
                           
                            <div className='flex flex-col gap-2'>
                            <label className='text-[1.5em] font-normal'>Email</label>
                            <input className='h-[6vh] outline-none border-2 border-[#54545429] pl-3 p-2' type='email' placeholder='Enter a Email' />
                            </div>
                            <div className='flex flex-col gap-2'>
                            <label className='text-[1.2em] font-normal'>Password</label>
                            <input className='h-[6vh] outline-none border-2 border-[#54545429] pl-3 p-2' type='password' placeholder='Enter a Password' />
                            </div>

                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <input type='radio' className='w-5 h-5 border-2 border-[#2b2b2b4c] appearance-none bg-white  checked:bg-[#000]' />
                                    <p className='font-medium'>Remember me</p>
                                </div>
                                <div>
                                    <p className='font-medium text-md'>Forgot Password?</p>
                                </div>
                            </div>
                            <button className='w-full h-[6vh] bg-black text-white'>
                                Sign In
                            </button>
                            <button className='w-full h-[6vh] border-2 border-[#54545429] bg-white text-black justify-center items-center flex'>
                            <p clas><FcGoogle /> </p> Sign In With Google
                            </button>
                            <div className='w-full flex justify-center items-center'>
                            <p className='opacity-65 '>Dont have an account? <span className='text-green-500'>Sign Up</span></p>
                        </div>
                        </form>
                  
                       </div>
                    </div>
                </div>
            </div>
            <div className='w-[70%] h-[100%] flex justify-center items-center'>
                <img src={shoes} className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}
