import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
        <footer className='flex flex-col text-black-100 mt-5 mb-10 self-center border border-custom w-[1209px] rounded-3xl shadow-md shadow-[#9bd033]'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-6 px-6 py-10 sm:px-16'>
                <div className='flex flex-col justify-start items-start gap-5'>
                    <div className='flex justify-center items-center'>
                        {/* <Image width={45} height={18} src="/assets/images/logo/Logo.png" className=" cursor-pointer" alt="logo" /> */}
                        <p className='font-bold text-base text-white'>FTSUB </p>
                    </div>
                    <p className='font-normal text-base text-white'>...Maximizing subscriptions </p>

                    <div className='flex gap-3'>
                        <Image src="/assets/svg/PlayStoreRound.svg" alt='logo' width={35} height={18} className='object-contain hover:cursor-pointer hover:scale-105'/>
                        <Image src="/assets/svg/AppStoreRound.svg" alt='logo' width={35} height={18} className='object-contain hover:cursor-pointer hover:scale-105'/>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='footer__links flex gap-24 '>
                        {footerLinks.map((link) => (
                            <div key={link.title} className='footer__link flex flex-col gap-3'>
                                <h3 className='font-bold text-customgreen'>{link.title}</h3>
                                {link.links.map((item) => (
                                    <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-white ">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-3'>
                        <Image src="/assets/svg/Facebook.svg" alt='logo' width={24} height={24} className='object-contain hover:cursor-pointer hover:scale-105'/> 
                        <Image src="/assets/svg/Linkedln.svg" alt='logo' width={24} height={24} className='object-contain hover:cursor-pointer hover:scale-105'/> 
                        <Image src="/assets/svg/Instagram.svg" alt='logo' width={24} height={24} className='object-contain hover:cursor-pointer hover:scale-105'/> 
                        <Image src="/assets/svg/twitter-x-fill.svg" alt='logo' width={24} height={24} className='object-contain hover:cursor-pointer hover:scale-105'/> 

                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center flex-wrap mt-10 px-6 py-10 sm:px-16'>
                    <p className='text-white'> &copy;2023 FTsub. All Rights Reserved</p>
            </div>
        </footer>
    </>
  )
}
