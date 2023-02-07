import React from 'react'
import './Blog.css'
import b1 from '../../assets/blogs/b1.png'
import b2 from '../../assets/blogs/b2.png'

export default function Blog() {
    const blogs=[
        {
            img:b1,
            title:'Skip Navigation',
            date:'Feb 13, 2022',
            content:'So before we even start about the purpose of skip navigation and why is it even used in the first place let\'s talk about What is skip navigation? Skip navigation is a way to provide links to the keyboard & screen reader users, helping them jump to the main content (usually) or in some cases a specific area of the website.',
            link:'https://medium.com/@mossmanipal/skip-navigation-62c164bf248'
        },
        {
            img:b2,
            title:'OSINT (Open Source Intelligence)',
            date:'Nov 10, 2022',
            content:'The term open-source intelligence can consist of images of spies in the imagination of the people who are not familiar with the discipline. Intelligence gathering is traditionally the domain of the people who spy. But the good thing about getting proper leverage over OSINT is you don’t have to be a spy. It can really help protect yourself from potential threats, inform you about your competitor’s strategies, you can get to know more about partners before you actually invest time in them. OSINT is an essential tool used by lawyers, detectives, law enforcement officers, and anyone who wants to gather some intelligence about a subject as it is open source.',
            link:'https://medium.com/@mossmanipal/osint-open-source-intelligence-18ad45c2f93d'
        }
    ]
  return (
    <div className='blog-container' id='blog'>
        <div className='blog-title'>Blogs</div>
        <div className='blog-cards-container'>
        {
            blogs.map((item)=>(
                <>
                    <div className='blog-card'>
                        <div>
                            <img src={item.img} className='blog-img'/>
                        </div>
                        <div className='blog-card-title'>{item.title}</div>
                        <div className='blog-card-date'>{item.date}</div>
                        <div className='blog-card-content'>{item.content.slice(0,150)}...</div>
                        <div className='blog-card-more'>
                            <a href={item.link} target='_blank'>
                            Read More
                            </a>
                        </div>
                    </div>
                </>
            ))
        }
        </div>
    </div>
  )
}
