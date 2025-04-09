import { BrowserRouter, Navigate } from 'react-router'
import './assets/css/global.css'
import { Routes, Route } from 'react-router-dom';
import Messenger from './pages/Messenger.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

export default function App() {

return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Messenger />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}


