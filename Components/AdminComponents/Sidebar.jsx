import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col text-slate-900 bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border-b border-slate-200'>
                <Image src={assets?.logo} width={120} alt='logo' />
            </div>

            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border-r border-slate-200 bg-slate-50'>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href='/admin/addBlog' className='flex items-center gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 shadow-[-5px_5px_0px_#cbd5f5] hover:border-slate-500'>
                        <Image src={assets?.add_icon} alt='add-icon' width={28} /><p>Add blogs</p>
                    </Link>
                    <Link href='/admin/blogList' className='mt-5 flex items-center gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 shadow-[-5px_5px_0px_#cbd5f5] hover:border-slate-500'>
                        <Image src={assets?.blog_icon} alt='blog-icon' width={28} /><p>Blog List</p>
                    </Link>
                    <Link href='/admin/subscription' className='mt-5 flex items-center gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 shadow-[-5px_5px_0px_#cbd5f5] hover:border-slate-500'>
                        <Image src={assets?.email_icon} alt='email-icon' width={28} /><p>Subscribed Email List</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar