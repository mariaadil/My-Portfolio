import React from 'react'
import './App.css'
import About from './Components/About'
import ProjectList from './Components/ProjectList'
import Navbars from './Components/Navbar'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
export default function App() {
  return (
    <div className="fade-in">
    <Navbars/>  
      <About className="zoom-in"/>
    <ProjectList className="bounce-in"/>
    <Skills className="bounce-in"/>
    <Contact/>
    </div>
  )
}

