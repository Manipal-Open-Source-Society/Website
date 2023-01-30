import React from 'react'
import Contact from '../../Components/Contact/Contact'
import TopNav from '../../Components/Navbar/Navbar'
import './Home.css'
export default function Home() {
  return (
    <div className=''>
        <TopNav/>
        <div className='main-container'>
        Hello world
        <Contact/>
        </div>
    </div>
  )
}
