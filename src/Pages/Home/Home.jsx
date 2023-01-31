import React from 'react'
import Contact from '../../Components/Contact/Contact'
import TopNav from '../../Components/Navbar/Navbar'
import About from '../About/About'
import './Home.css'
export default function Home() {
  return (
    <div className=''>
        <TopNav/>
        <About/>
        <div className='main-container'>
        <Contact/>
        </div>
    </div>
  )
}
