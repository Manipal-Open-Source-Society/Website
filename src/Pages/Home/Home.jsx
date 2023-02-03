import React from 'react'
import Contact from '../../Components/Contact/Contact'
import Domains from '../../Components/Domains/Domains'
import TopNav from '../../Components/Navbar/Navbar'
import About from '../../Components/About/About'
import './Home.css'
export default function Home() {
  return (
    <div className=''>
        <div className='main-container'>
        <TopNav/>
        <About/>
        <Domains/>
        <Contact/>
        </div>
    </div>
  )
}
