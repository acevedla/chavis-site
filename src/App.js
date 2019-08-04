import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Services from './Services/Services'
import Gallery from './Gallery/Gallery'

function App() {
  return (
    <main className='App'>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/gallery' component={Gallery} />
    </main>
  );
}

export default App;
