import React from 'react';
import { Footer, Blog, Possibility, Features, AccpickPos, Header } from './containers';
import { Cta, Brand, Navbar, Fixed } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <div className='gradient__bg fixed accpick__nav'>
            <Navbar />
          </div>          
          <Header />
        </div>
        <Fixed />
        <Brand />
        <AccpickPos />
        <Features />   
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App