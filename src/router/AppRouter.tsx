import { Routes, Route, Navigate } from 'react-router-dom'
import { AboutMe } from '../pages/aboutMe/AboutMe'
import Navbar from '../components/Navbar'
import { Project } from '../pages/project/Project'
import { Skill } from '../pages/skill/Skill'
import { Introduction } from '../pages/introduction/Introduction'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className='container position-relative'>
        <Routes>
          <Route path="inicio" element={ <Introduction /> } />
          <Route path="sobre-mi" element={ <AboutMe /> } />
          <Route path="proyectos" element={ <Project /> } />
          <Route />
          <Route path="Habilidades" element={ <Skill /> } />
          <Route path="/" element={ <Navigate to="inicio"/> } />
        </Routes>
      </div>
    </>
  )
}
