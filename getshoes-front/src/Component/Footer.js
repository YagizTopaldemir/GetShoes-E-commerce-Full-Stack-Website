import React from 'react'

export default function Footer() {
  return (
    <div className='w-[100vw] min-h-[50vh] bg-white mt-[5vh] flex justify-center items-end'>
      <div className='w-[100%] h-[5vh] bg-black flex justify-center items-center'>
        <div className='w-[85%] flex justify-between items-center'>
        <div className='text-white text-[12px]'>©2024 SetNate Grup Consultancy Communication and Sales Tic. LIKE. All Rights Reserved.</div>
        <div className='flex text-[12px] justify-center items-center gap-3 text-white'>
          <p>Cookie Preferences</p>
          <p>KVKK and Privacy Policy</p>
          <p>SetNate</p>
          <p>Terms of Use</p>
        </div>
        </div>
      </div>
    </div>
  )
}
