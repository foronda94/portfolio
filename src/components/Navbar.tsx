import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link
        className="navbar-brand"
        to="/"
      >
        Bryan Foronda Agudelo
      </Link>
      <div className='navbar-collapse justify-content-end'>
        <div className='navbar-nav'>
          <NavLink 
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? "active" : "" } ` } 
            to="/sobreMi"
          >
            Sobre mi
          </NavLink>

          <NavLink 
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? "active" : "" } ` }
            to="/project"
          >
            Proyectos
          </NavLink>

          <NavLink 
            className={ ({isActive}) => ` nav-item nav-link ${ isActive ? "active" : "" } ` }
            to="/experience"
          >
            Experiencia
          </NavLink>

          <NavLink
            className={ ({isActive}) => ` nav-item nav-link ${ isActive ? "active" : "" } ` }
            to="/Skill"
          >
            Habilidades
          </NavLink>

          <NavLink 
            className={ ({isActive}) => ` nav-item nav-link ${ isActive ? "active" : "" } ` }
            to="/contact"
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar