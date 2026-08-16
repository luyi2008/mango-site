import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        {/* 以后加页面：<Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)