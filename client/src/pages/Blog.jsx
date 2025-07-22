import React from 'react'
import {useParams} from 'react-router-dom'
import { blog_data } from '../assets/assets'

const Blog = () => {
  const {id} =useParams()
  const [data, setData] = useState(null) 

  const fetchblogData = async ()=> {
    blog_data

   } 

  return (
    <div>
      <h1>Welcome to the Blog Page</h1>
      <p>Here you can find the latest articles and updates.</p>
    </div>
  )
}

export default Blog
