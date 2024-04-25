import { Routes, Route, Navigate } from 'react-router-dom'
import { AboutMe } from '../pages/aboutMe/AboutMe'
import Navbar from '../components/Navbar'
import { Project } from '../pages/project/Project'
import { Skill } from '../pages/skill/Skill'
import { Introduction } from '../pages/introduction/Introduction'
import { Footer } from '../pages/footer/Footer'
import { Experience } from '../pages/experience/Experience'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className='container position-relative'>
        <Routes>
          <Route path="inicio" element={ <Introduction /> } />
          <Route path="sobre-mi" element={ <AboutMe /> } />
          <Route path="proyectos" element={ <Project /> } />
          <Route path="experiencia" element={ <Experience /> } />
          <Route path="Habilidades" element={ <Skill /> } />
          <Route path="/" element={ <Navigate to="inicio"/> } />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
