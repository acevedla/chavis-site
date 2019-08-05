import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Services from './Services/Services'
import Gallery from './Gallery/Gallery'
import Blog from './Blog/Blog'

function App() {
  return (
    <main className='App'>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/gallery' component={Gallery} />
      <Route exact path='/blog' component={Blog} />
    </main>
  );
}

export default App;
