import { Routes, Route, Navigate } from 'react-router-dom'
import { AboutMe } from '../pages/about-me/AboutMe'
import Navbar from '../components/Navbar'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="sobreMi" element={ <AboutMe /> } />
          <Route />
          <Route />
          <Route />
          <Route path="/" element={ <Navigate to="sobreMi"/> } />
        </Routes>
      </div>
    </>
  )
}
