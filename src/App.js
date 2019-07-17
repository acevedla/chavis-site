import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'

function App() {
  return (
    <main className='App'>
      <Route exact path='/' component={Homepage} />
    </main>
  );
}

export default App;
