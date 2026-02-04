'use client'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '@/Assets/assets'

const Page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: '',
    author: 'HP Blogger',
    authorImg: '/user_profile_icon.png'
  });

  const onChangeHandler = (e) => {
    const {name, value} = e?.target;
    setData({...data, [name]: value});
  }

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', data?.title);
      formData.append('description', data?.description);
      formData.append('category', data?.category);
      formData.append('author', data?.author);
      formData.append('author_img', data?.authorImg);
      formData.append('image', image);
  
      const response = await axios.post('/api/blog', formData);
      if(response?.data?.success){
        toast.success(response?.data?.msg);
        setData({
          title: '',
          description: '',
          category: '',
          author: 'HP Blogger',
          authorImg: '/user_profile_icon.png'
        });
        setImage(false);
      } else {
        toast.error(response?.data?.msg);
      }
    } catch (error) {
      toast.error('error')
    }
   
  }

  return (
    <>
    <form className='pt-5 px-5 sm:pt-12 sm:pl-16' onSubmit={onSubmitHandler}>
      <p className='text-xl'> Upload thumbnail</p>
      <label htmlFor='image'><Image className='mt-4' src={ !image ? assets?.upload_area : URL.createObjectURL(image)} width={140} height={70} alt='image-upload-area' /></label>
      <input onChange={(e)=> setImage(e.target.files[0])} type='file' id='image' hidden required />

      <p className='text-xl mt-4'>Blog title</p>
      <input type='text' placeholder='Type blog title here' required name='title' value={data?.title} onChange={onChangeHandler} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-slate-300' />

      <p className='text-xl mt-4'>Blog description</p>
      <textarea type='text' placeholder='Type content here' required name = 'description' value={data?.description} onChange={onChangeHandler} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-slate-300' />

      <p className='text-xl mt-4'>Blog Category</p>
      <select name='category' className='w-43 mt-4 px-4 py-3 border text-gray-500 border-slate-300' value={data?.category} onChange={onChangeHandler}>
        <option value = ''>Select Category</option>
        <option value='Startup'>Startup</option>
        <option value='Technology'>Technology</option>
        <option value='Lifestyle'>Lifestyle</option>
      </select>
      <br />
      <button type='submit' className='mt-8 w-40 h-12 bg-sky-500 text-white hover:bg-sky-700'>Add</button>
    </form>
    </>
  )
}

export default Page