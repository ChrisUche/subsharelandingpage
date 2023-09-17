import Image from 'next/image'
import React from 'react'

export const Testimonial = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center p-20">
          <h1 className="font-bold text-3xl text-white flex gap-3 mb-5 md:text-5xl">
            Testimonials
          </h1>
        </div>

          <div className="lg:flex gap-8">
            <Image width={242}
                    height={185} 
                    src="/assets/svg/Lawrence.svg" 
                    className=" md:w-[406px] md:h-[456px]" alt="sub" />
            <Image width={242}
                    height={185} 
                    src="/assets/svg/Ola.svg" 
                    className=" md:w-[406px] md:h-[456px]" alt="sub" />
            <Image width={242}
                    height={185} 
                    src="/assets/svg/Racheal.svg" 
                    className=" md:w-[406px] md:h-[456px]" alt="sub" />
          </div>
      </div>
    </>
  )
}
