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
      <div>
        <p>Published on {data.createdAt}</p>
      </div>
      <div></div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Blog;
