import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Blog.css'
import YouTube from 'react-youtube'

class Blog extends Component {
    render() {
          const opts = {
            height: '150',
            width: '300',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
          };
      
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
            <div className='blog-text'>
                <h1>
                    SAMPLE RECIPE
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <ul>
                    <li>INGREDIENT 1</li>
                    <li>INGREDIENT 2</li>
                    <li>INGREDIENT 3</li>
                    <li>INGREDIENT 4</li>
                    <li>INGREDIENT 5</li>
                    <li>INGREDIENT 6</li>
                    <li>INGREDIENT 7</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
            </div>
            <div className='video-links'>
            <YouTube
                className={'youtube'}
                videoId="tYRS0aXaBC8"
                opts={opts}
                onReady={this._onReady}
            />
            <ul>
                <li><a href={'https://www.youtube.com/watch?v=fjy5Gk9-ulg'}>LINK #1</a></li>
                <li><a href={'https://www.youtube.com/watch?v=fjy5Gk9-ulg'}>LINK #2</a></li>
                <li><a href={'https://www.youtube.com/watch?v=fjy5Gk9-ulg'}>LINK #3</a></li>
                <li><a href={'https://www.youtube.com/watch?v=fjy5Gk9-ulg'}>LINK #4</a></li>
                <li><a href={'https://www.youtube.com/watch?v=fjy5Gk9-ulg'}>LINK #5</a></li>
            </ul>
            </div>
            </main>
          );
    }
      
        _onReady(event) {
          // access to player in all event handlers via event.target
          event.target.pauseVideo();
        }
}


export default Blog;