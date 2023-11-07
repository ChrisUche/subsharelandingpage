import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav className="h-[90px]  bg-transparent text-white shadow-md flex items-center z-10 top-0 left-0 mb-2">
        <div className="flex w-[95%] mt-[12px] ml-[20px] items-center justify-around flex-wrap z-auto gap-3">
            <div className='flex items-center'>
                <Image width={63} height={60} src="/assets/images/logo/Logo.png" className=" cursor-pointer" alt="logo" />
                <p>SUBSHARE</p>
            </div>

            <div className='flex  gap-[51px]'>
                <p className='cursor-pointer'>Home</p>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer'>FAQ</p>
                <p className='cursor-pointer'>Contact Us</p>
            </div>

            <button className='flex items-center justify-between bg-button p-[12px] gap-10 rounded-lg'>
                <p className='font-semibold font text-custom'>Create Subshare account</p>
            </button>
        </div>

    </nav>
    </>
  )
}
