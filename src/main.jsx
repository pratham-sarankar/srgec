import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Protected from './components/Protected.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected><Home /></Protected>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

