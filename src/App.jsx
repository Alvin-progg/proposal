import React from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'


const App = () => {
  return (
    <main className='m-0 p-0 box-border font-sans inline-block  flex-col'>
        <Nav/>
        <Hero/>
        <Services/>
    </main>
  )
}

export default App