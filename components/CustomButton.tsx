"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'

export const CustomButton = ({title, smtitle, subtitle, containerStyles, handleClick, btnType, appIcon, playstoreIcon, isDisabled, textStyles}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className= {` custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
        {appIcon && (
          <div className='relative w-6 h-6'>
            <Image 
              src={appIcon}
              alt="app icon"
              fill
              className='object-contain'
            />
          </div>
        )}
        {playstoreIcon && (
          <div className='relative w-6 h-6'>
            <Image 
              src={playstoreIcon}
              alt="playstore icon"
              fill
              className='object-contain'
            />
          </div>
        )}
       <span className={`flex-1 ${textStyles}`}>
        <div className="flex flex-col">
          <span className='text-xs'>{smtitle}</span>
          <span>{subtitle}</span>
        </div>
      </span>
    </button>
  )
}
