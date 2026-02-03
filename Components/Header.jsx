import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import { toast } from 'react-toastify';
import axios from 'axios';

const Header = () => {

  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post('/api/email', formData);
    if (response?.data?.success) {
      toast.success(response?.data?.msg);
      setEmail("");
    } else {
      toast.error("Something went wrong");
    }
  }


  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} alt="logo" width={180} className='w-[130px] sm:w-auto' />
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='arrow' /></button>
      </div>

      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>A sleek and modern blogging platform to write, share, and inspire. <br /> Built for speed, simplicity, and global reach.</p>
        <form onSubmit={handleSubscribe} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter Your Email' className='pl-4 outline-none' />
          <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 bg-gray-200 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>
      </div>

    </div>
  )
}

export default Header