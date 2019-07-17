import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Homepage.css'

class Homepage extends Component {
    render () {
        return (
            <header>
                <nav className='nav'>
                <NavLink to='/registerform'>Sign up</NavLink>
                <NavLink to='/login'>Log In</NavLink>
                </nav>
            </header>
        )
    }
}

export default Homepage;