import React from 'react'
import Contact from '../../Components/Contact/Contact'
import Domains from '../../Components/Domains/Domains'
import TopNav from '../../Components/Navbar/Navbar'
import About from '../../Components/About/About'
import './Home.css'
import Blog from '../../Components/Blog/Blog'
import PastEvents from '../../Components/PastEvents/PastEvents'
export default function Home() {
  return (
    <div className=''>
        <div className='main-container'>
        <TopNav page={'home'}/>
        <About/>
        <Domains/>
        <Blog/>
        <PastEvents/>
        <Contact/>
        </div>
    </div>
  )
}
