import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Homepagepictures from './Homepagepictures/Homepagepictures'
import Services from './Services/Services'

function App() {
  return (
    <main className='App'>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/' component={Homepagepictures} />
      <Route exact path='/services' component={Services} />
    </main>
  );
}

export default App;
