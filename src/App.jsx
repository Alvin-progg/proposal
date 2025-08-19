import React from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'


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
      </main>
    </>

  )
}

export default App