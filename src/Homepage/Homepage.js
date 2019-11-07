import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Homepage.css'

class Homepage extends Component {
    render () {
        return (
            <main>
                <h1 className='title'>CHAVIS MARR</h1>
            <header className='header'>
            <div className='nav-links'>
                <span><img className='homepage-profile' src={require('../images/homepage/IMG_4616.JPG')} alt='No image found'></img></span>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/gallery'>GALLERY</NavLink>
                <NavLink to='/services'>SERVICES</NavLink>
                <NavLink to='/blog'>BLOG</NavLink>
            </div>
            </header>
            <div className='container'>
            <div className='bio'>
                <h1 className='title-1'>MEET THE CHEF</h1>
                <p className='about-me'>Born in Memphis but raised in Florida, I grew up learning the art of slow 
                cooking and BBQ from my Family, many of whom were in the food and beverage industry. I knew early 
                on that I wanted to be a chef when I grew up. </p>
                <p className='about-me'>At the age of 17 I enrolled in Le Cordon Bleu College of Culinary Arts 
                where I earned my Associates Degree</p>
                <p className='about-me'>In 2009, I began an internship for JW Grande Lakes Marriott in Orlando. 
                Where I worked various positions including management and also gained a passion for sustainable cooking.</p>
                <p className='about-me'> I later moved to Jacksonville to take on the role of Specialty Restaurant Chef 
                at the Sawgrass Marriott. I knew I wanted to create world class cuisine with ingredients that could be
                sourced within 50miles or less of the restaurant.</p>
                <p className='about-me'>When the opportunity presented itself I moved to Boston to take on the position 
                of Senior Banquet Chef. Here I was able to take all my fine tuning and different techniques that I’ve 
                learned throughout the years and display them on a larger scale.</p>
                <p className='about-me'>After 10 years of working for Marriott I decided I wanted something to give a 
                more personal touch of what my food means to me and really be the face of my brand. This brings us to 
                now.</p>
                <p className='about-me'>As your Personal Chef I want to disclose total transparency. I want my clients 
                to feel as if they’re family. Whether you are throwing a get together and want it catered. A gym 
                activist and need meal prep or even something as nice as date night to make things a little bit 
                special. I’m here so that there I one less thing to worry about.</p>
                <p className='about-me'>When you set up an event with me imagine as if you are talking to a friend 
                a brother or associate. We are in this together so let’s take the first steps together in organizing 
                a great meal.</p>
            </div>
            <div className='right-side'>
                <ul>
                    <li>
                    <img className='homepage-images' src={require('../images/homepage/IMG_4655.JPG')} alt='No image found'></img>
                    </li>
                    <li>
                    <img className='homepage-images' src={require('../images/homepage/IMG_4657.JPG')} alt='No image found'></img>
                    </li>
                </ul>
            </div>
            </div>
            </main>
        )
    }
}

export default Homepage;