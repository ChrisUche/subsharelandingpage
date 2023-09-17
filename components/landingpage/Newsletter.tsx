import React from 'react'
import { CustomButton } from '../CustomButton'

export const Newsletter = () => {
  return (
    <>
       <div className='relative bg-customgreen w-[1000px] h-[460px] self-center rounded-2xl flex items-start justify-center'>
            <div className='bg-white w-[750px] h-[300px] rounded-tl-none rounded-tr-none rounded-br-2xl rounded-bl-2xl'>
                <div className='h-full flex flex-col items-center justify-center'>
                <h1 className='font-bold text-lg mb-5 md:text-4xl'>Subscribe To Our Newsletter</h1>
                <p className='font-normal text-sm mb-5 md:text-lg'>Be the first to receive the newest updates on our product</p>
                </div>
            </div>
            <div className='flex items-center justify-center w-[420px] h-[73px] absolute rounded-2xl bg-custom left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[-40%]'>
                <form>
                <label>
                    <input
                    type='text'
                    name='name'
                    placeholder='What is your Name?'
                    className='bg-transparent py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder:text-white'
                    />
                </label>
                </form>
                <CustomButton
                smtitle="SUBSCRIBE"
                containerStyles=" p-2 text-base font-bold items-center border border-custom flex text-custom bg-customgreen rounded-md hover:bg-green-800"
                />
            </div>
        </div>


    </>
  )
}
