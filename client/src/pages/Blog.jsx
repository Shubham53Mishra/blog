/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blog_data } from '../assets/assets';

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
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Blog;
