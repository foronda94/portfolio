import { Routes, Route, Navigate } from 'react-router-dom'
import { AboutMe } from '../pages/about-me/AboutMe'
import Navbar from '../components/Navbar'
import { Project } from '../pages/project/Project'
import { Skill } from '../pages/skill/Skill'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="sobreMi" element={ <AboutMe /> } />
          <Route path="proyectos" element={ <Project /> } />
          <Route />
          <Route path="Habilidades" element={ <Skill /> } />
          <Route path="/" element={ <Navigate to="sobreMi"/> } />
        </Routes>
      </div>
    </>
  )
}
