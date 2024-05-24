import React from 'react'
import Headers from './components/Layouts/Header'
import "./components/Styles/App.css"
import Intro from './components/Cards/Intro'
import Projects from './components/Cards/Projects'
import About from './components/Cards/About'
import Footer from './components/Layouts/Footer'
import "./components/Styles/App.css"
import Divider from './components/Layouts/Divider'
import Contact from './components/Cards/Contact'
import Divider2 from './components/Layouts/Divider2'

const App = () => {
  
  return (
    <div>
      <Headers />
      <Intro />
      <About />
      <Divider2 />
      <Contact />
      <Projects />
      <Divider />
      <Footer />
    </div>
  )
}

export default App