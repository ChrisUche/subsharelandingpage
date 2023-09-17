import Image from "next/image"


export const Howitworks = () => {
  return (
    <>
        <div className='flex-col text-center p-20 gap-[13px]'>
            <div className='text-center'>
             <h2 className='font-bold text-3xl text-white  md:text-5xl'>How it works</h2>
             <p className='text-white font-normal'>Read the steps below to know <br/> how subshare works</p>
            </div>

            <div className=' items-center  justify-between gap-4 mb-6 md:flex'>

                <Image width={242}
                        height={185} 
                        src="/assets/svg/Howtocard.svg" 
                        className=" md:w-[456px] md:h-[456px]" alt="Howtocard" />

                <Image width={242}
                        height={185} 
                        src="/assets/svg/subsharecard.svg" 
                        className=" md:w-[400px] md:h-[380px]" alt="subsharecard" />
            </div>

            <div className=' items-center  justify-between gap-4 mb-6 md:flex'>
                <Image width={242}
                        height={185} 
                        src="/assets/svg/Reasonscards.svg" 
                        className=" md:w-[456px] md:h-[456px]" alt="Reasonscards" />

                <div className='flex-col gap-[18px] md:w-[480px]  md:h-[136px]'>
                    <h2 className='font-bold text-3xl text-white flex mb-2 md:mb-4  md:text-4xl'>
                        Four reasons to join us
                    </h2>

                    <p className='font-normal text-base text-white text-start '>
                        We invite you to become a part of the vibrant Subshare community today, where you can unlock a vast and exciting world of possibilities that await you. By joining us, you'll not only save money but also have the opportunity to connect with like-minded individuals who share your interests.
                    </p>
                </div>

            </div>
            
            <div className=' items-center  justify-between gap-4 mb-6 md:flex'>

                <div className='flex-col gap-[18px] md:w-[480px]  md:h-[136px]'>
                    <h2 className='font-bold text-3xl text-white flex mb-2 md:mb-4  md:text-4xl'>
                        Create Groups In Subshare
                    </h2>

                    <p className='font-normal text-base text-white text-start '>
                        Creating groups in subshare is cost-efficient, it enhances the user experiences and provides benefits for its users. Here are few reasons why it&apos;s cost-efficient to create groups at Subshare:
                    </p>
                    <ul>
                        <li className='font-normal text-sm text-white '>Groups make it easier for Subshare users to share the cost of subscriptions.</li>
                    </ul>
                </div>

                <Image width={242}
                        height={185} 
                        src="/assets/svg/Sub.svg" 
                        className=" md:w-[456px] md:h-[456px]" alt="sub" />
            </div>
        </div>
    </>
  )
}
