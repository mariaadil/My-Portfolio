import React from 'react'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import ProjectList from './Components/ProjectList'
import Navbars from './Components/Navbar'
import Contact from './Components/Contact'
import Skills from './Components/Skills'

export default function App() {
  return (
    <div>
    <Navbars/>  
      <Home className="fade-in"/>
      <About className="fade-in"/>
    <ProjectList className="fade-in"/>
    <Skills className="fade-in"/>
    <Contact/>
    </div>
  )
}

