import './App.css'
import { AboutMe } from './pages/about-me/AboutMe'
import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <>
      <AppRouter />
      <AboutMe />
    </>
  )
}

export default App
