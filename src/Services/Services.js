import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Services.css'

class Services extends Component {
    render () {
        return (
            <main>
                <header>
                    <nav>
                        <NavLink to='/' className='links'>Home</NavLink>
                        <NavLink to='/gallery' className='links'>Gallery</NavLink>
                    </nav>
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