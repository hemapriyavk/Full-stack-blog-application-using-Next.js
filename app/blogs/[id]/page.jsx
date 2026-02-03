'use client'
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const page = ({ params }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get('/api/blog', {
                    params: {
                        id: params?.id
                    }
                });
                if (response?.data?.blog) {
                    setData(response?.data?.blog)
                }
            } catch (error) {
                console.log(error);
            }

        }
        fetchBlogData();
    }, []);

    return (
        data ? <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <Image src={assets?.logo} alt="logo" width={180} className='w-[130px] sm:w-auto' />
                    </Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started
                        <Image src={assets?.arrow} alt='arrow' />
                    </button>
                </div>
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data?.title}</h1>
                    <Image alt='authorImg' src={data?.author_img} width={60} height={60} className='mx-auto mt-6 border border-white rounded-full' />
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data?.author}</p>
                </div>
            </div>
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image src={data?.image} width={1280} height={720} alt='blog-image' className='border-4 border-white' />

                <div className='blog-content' dangerouslySetInnerHTML={{__html: data?.description}}></div>
                <div className='my-24'>
                    <p className='text-black font-semibold my-4'>Share this article on social media</p>
                    <div className='flex'>
                        <Image src={assets?.facebook_icon} alt='facebook-icon' width={50} />
                        <Image src={assets?.twitter_icon} alt='twitter-icon' width={50} />
                        <Image src={assets?.googlePlus_icon} alt='googlePlus-icon' width={50} />
                    </div>
                </div>
            </div>
            <Footer />
        </> : <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <Image src={assets?.logo} alt="logo" width={180} className='w-[130px] sm:w-auto' />
                    </Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started
                        <Image src={assets?.arrow} alt='arrow' />
                    </button>
                </div>
                <p className='text-gray-500 text-center w-full'>No blogs found</p>
            </div>
        </>
    )
}

export default page