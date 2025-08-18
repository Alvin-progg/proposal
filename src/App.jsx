import React from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'


const App = () => {
  return (
    <>
      <header>
        <Nav/>
        <Hero/>
      </header>
      <main className=''>
        <Services/>
      </main>
    </>

  )
}

export default App