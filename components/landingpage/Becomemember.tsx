"use client"

import Image from 'next/image'
import React from 'react'
import { CustomButton } from '../CustomButton'

export const Becomemember = () => {
    const handleScroll = () => {

    }
  return (
    <>
    <div className='border border-custom items-center justify-around pt-20 gap-14 mt-30 bg-transparent md:flex'>
      <Image width={800}
                    height={500} 
                    src="/assets/svg/Scartterdot.svg" 
                    alt="phone"
                    className='absolute mb-20 left-2.5' />
      <Image width={950}
                    height={500} 
                    src="/assets/svg/Scartterdot2.svg" 
                    alt="phone"
                    className='absolute mb-20 right-2.5' />
        <div className='flex-col items-center md:w-[480px] md:h-[160px] px-10 mb-80 z-30'>
          <h1 className='font-bold text-3xl text-white mb-5 md:text-5xl'>
            Be a member of ftsub with no cost. You&apos;re Just a Download Away!
          </h1>

          <div className='flex gap-4'>
            <CustomButton
                        appIcon='/assets/svg/Playstore.svg'
                        smtitle="Download On"
                        subtitle={'Google Play'} 
                        containerStyles="bg-transparent p-2 text-base font-bold items-center border border-custom flex text-white rounded-xl mt-10 hover:bg-green-800 hover:scale-105"
                        handleClick={handleScroll}/>
            <CustomButton
                      appIcon='/assets/svg/Appstore.svg'
                      smtitle="Download On"
                      subtitle={'Apple Store'} 
                      containerStyles="bg-transparent p-2 text-base font-bold items-center border border-custom flex text-white rounded-xl mt-10 hover:bg-green-800 hover:scale-105"
                      handleClick={handleScroll}/>
          </div>
        </div>

           <Image width={340}
                  height={260} 
                  src="/assets/svg/Phone.svg" 
                   alt="phone" 
                   className='z-30'/>
      
    </div>
    </>
  )
}
