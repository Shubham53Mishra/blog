import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        
      </Routes>
    </div>
  )
}

export default App
