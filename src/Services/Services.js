import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Services.css'

class Services extends Component {
    render () {
        return (
            <main>
            <header className='header'>
            <div>
                <h1 className='title'>SUPER AWESOME TITLE</h1>
            </div>
            <div className='nav-links'>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/gallery'>GALLERY</NavLink>
                <NavLink to='/services'>SERVICES</NavLink>
                <NavLink to='/blog'>BLOG</NavLink>
            </div>
            </header>
            <div>
                <h1 className='services-info-top'>Info goes here</h1>
            </div>
            <div>
                <h1 className='services-info'>Info goes here</h1>
            </div>
            <div>
                <h1 className='services-info'>Info goes here</h1>
            </div>
            </main> 
        )
    }
}

export default Services;