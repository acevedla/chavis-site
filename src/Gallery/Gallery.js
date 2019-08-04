import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { NavLink } from 'react-router-dom'
import './Gallery.css'

class Gallery extends Component {
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
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={80}
                totalSlides={7}
                visibleSlides={3}
                isPlaying={false}
                interval={5000}
                step={4}
                playDirection={'forward'}
                lockOnWindowScroll={'yes'}
            >
            <Slider classNameAnimation={'animation'}>
                <Slide index={0}>
                    <img className='gallery-images' src={require('../images/gallery/IMG_0227.jpg')} alt='No image found'></img>
                </Slide>
                <Slide index={1}>
                <img className='gallery-images' src={require('../images/gallery/IMG_1732.jpg')} alt='No image found'></img>
                </Slide>
                <Slide index={2}>
                    <img className='gallery-images' src={require('../images/gallery/IMG_0001.jpg')} alt='No image found'></img>
                </Slide>
                <Slide index={3}>
                    <img className='gallery-images' src={require('../images/gallery/IMG_0002.jpg')} alt='No image found'></img>
                </Slide>
                <Slide index={4}>
                    <img className='gallery-images' src={require('../images/gallery/IMG_0005.jpg')} alt='No image found'></img>
                </Slide>
                <Slide index={5}>
                    <img className='gallery-images' src={require('../images/gallery/IMG_0007.jpg')} alt='No image found'></img>
                </Slide>
                <Slide index={6}>
                    <img className='gallery-images' src={require('../images/gallery/IMG_0009.jpg')} alt='No image found'></img>
                </Slide>
                <Slide index={7}>
                    <img className='gallery-images' src={require('../images/gallery/IMG_0018.jpg')} alt='No image found'></img>
                </Slide>
                <Slide index={8}>
                    <img className='gallery-images' src={require('../images/gallery/IMG_0019.jpg')} alt='No image found'></img>
                </Slide>
                <Slide index={9}>
                    <img className='gallery-images' src={require('../images/gallery/IMG_0020.jpg')} alt='No image found'></img>
                </Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
            </main>
        )
    }
}

export default Gallery;