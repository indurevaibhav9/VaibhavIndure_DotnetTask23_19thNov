import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserProfileCard from './components/UserProfileCard'
import RegistrationForm from './components/RegistrationForm'

function App()
{
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes style={{ minHeight: '80vh', padding: '20px', alignItems: 'center', justifyContent: 'center' }}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/user-profile" element={<UserProfileCard name="Vaibhav Indure" email="vaibhav.indure@example.com" />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/task3" element={<div>Task 3 Component</div>} />
          <Route path="/task4" element={<div>Task 4 Component</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
