import React from 'react';
import { Footer, Blog, Possibility, Features, AccpickPos, Header } from './containers';
import { Cta, Brand, Navbar, Fixed, Price } from './components';
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
        <hr/> 
        <AccpickPos />
        <hr/> 
        <Features />
        <hr/> 
        <Price />
        <hr/> 
        <Possibility />
        <hr/>
        <Cta />
        <hr/>
        <Blog />
        <hr/>
        <Brand />
        <Footer />
    </div>
  )
}

export default App