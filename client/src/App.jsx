import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import BlogPage from './pages/Blog'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:id" element={<BlogPage />} />

    </Routes>
  )
}

export default App