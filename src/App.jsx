import React from 'react';
import ShowCase from './showcase';
import { BrowserRouter } from 'react-router-dom'
import './styles.scss'


function App() {
  return (
      <BrowserRouter>
        <ShowCase />
      </BrowserRouter>
  )
}

export default App