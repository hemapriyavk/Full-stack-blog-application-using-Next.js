import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt="logo-light" width={120} />
        <p className='text-white text-sm'>All right reserved.  Copyright <a className='font-medium' href='https://hemapriya-portfolio.vercel.app/' target="_blank">@HP Creation</a></p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt="facebook" width={40} />
            <Image src={assets.twitter_icon} alt="twitter" width={40} />
            <Image src={assets.googlePlus_icon} alt="googlePlus" width={40} />
        </div>

    </div>
  )
}

export default Footer