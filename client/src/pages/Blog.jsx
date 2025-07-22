/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blog_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import assets from '../assets/assets';
import Moment from  'moment';


const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogData = () => {
      const blog = blog_data.find(item => String(item._id) === String(id));
      setData(blog);
    };
    fetchBlogData();
  }, [id]);

  return data ? (
    <div className='relative'>
         <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
      <Navbar />
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subtitle}</h2>
        <p className='text-gray-500'>Shubham Mishra</p>
      </div>
      <div></div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Blog;
