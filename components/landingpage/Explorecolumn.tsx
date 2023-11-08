import Image from 'next/image'
import { CustomButton } from '../CustomButton'

export const Explorecolumn = () => {
  const handleScroll = () => {

  }
  return (
    <>
        <section className='flex-col items-center gap-12 p-20'>
          <div className=' items-center justify-between gap-4  md:flex'>

            <div className='flex-col gap-[18px] md:w-[480px]  md:h-[136px]'>
              <h1 className='font-bold text-3xl text-white mb-5 md:text-5xl'>
              Simplify{" "} <span className='text-customgreen'> Sharing,</span> <br/>Supercharge <span className='text-customgreen'> Savings</span>
              </h1>

              <h2 className='font-normal text-base text-white '>
                P2P Transfers, Share Expenses, Subscriptions management all in one place. 
              </h2>

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

            <Image width={242}
                      height={185} 
                      src="/assets/svg/Phonegroup.svg" 
                      className=" md:w-[500px] md:h-[500px]" alt="signup" />
          </div>

          <div className=' items-center  justify-between gap-4 mb-6 md:flex'>

            <div className='flex-col gap-[18px] md:w-[480px]  md:h-[136px]'>
              <h2 className='font-bold text-3xl text-white flex mb-2 md:mb-4  md:text-4xl'>
                Explore the Limitless <br/> Potential of FTsub!
              </h2>
              
              <div>
                <h3 className='font-semibold text-2xl text-white mb-3'>
                  Spend Less, Enjoy More 
                </h3>
                <p className='text-white'>Share the Magic of Subscriptions,</p>
              </div>

              <div>
                <h3 className='font-semibold text-2xl text-white mb-3'>
                  Create Strong Bonds, Share Expenses
                </h3>
                <p className='text-white'>FTsub, Where Friendship Counts.</p>
              </div>
            </div>

            <Image width={242}
                      height={185} 
                      src="/assets/svg/Card.svg" 
                      className=" md:w-[456px] md:h-[456px]" alt="card" />
          </div>

          
        </section>
        </>
  )
}
