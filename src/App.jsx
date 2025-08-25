import React from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Tech from './components/Tech'
import Why from './components/Why'
import Review from './components/Review'
import Blog from './components/Blog'
import Doubt from './components/Doubt'
import Foot from './components/Foot'

const App = () => {
  return (
    <>
      <header>
        <Nav/>
        <Hero/>
      </header>
      <main >
        <Services/>
        <About/>
        <Portfolio/>
        <Tech/>
        <Why/>
        <Review/>
        <Blog/>
        <Doubt/>
      </main>
      <footer>
        <Foot/>
      </footer>
    </>

  )
}

export default App