import Image from 'next/image'
import React from 'react'

export const Sharecolumn = () => {
  return (
    <>
        <div className=' items-center  justify-around  bg-gradient-to-r from-[#25320c]  to-transparent gap-4 mb-6 md:flex'>

            <div className='flex-col gap-[18px] md:w-[480px]  md:h-[136px]'>
                <h2 className='font-bold text-3xl text-white flex mb-2 md:mb-4  md:text-4xl'>
                Share Expenses, 💸 Share Smile 😀
                </h2>

                <p className='font-normal text-base text-white text-start '>
                    The Art of Shared Expenses and Shared Smiles is Building Bonds through Financial Harmony
                </p>
                
            </div>

            <Image width={242}
                    height={185} 
                    src="/assets/svg/woman.svg" 
                    className=" md:w-[456px] md:h-[456px]" alt="sub" />
        </div>
    </>
  )
}
