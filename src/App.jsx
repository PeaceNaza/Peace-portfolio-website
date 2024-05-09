import React from 'react'
import Headers from './components/Layouts/Header'
import "./components/Styles/App.css"
import Intro from './components/Cards/Intro'
import Projects from './components/Cards/Projects'
import About from './components/Cards/About'
import Footer from './components/Layouts/Footer'

const App = () => {
  return (
    <div>
      <Headers />
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App