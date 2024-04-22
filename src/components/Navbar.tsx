import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link
        className="navbar-brand"
        to="/"
      >
        Bryan Foronda Agudelo{"</>"}
      </Link>
      <div className='navbar-collapse justify-content-end'>
        <div className='navbar-nav'>
          <NavLink 
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? "active" : "" } ` } 
            to="/inicio"
          >
            Inicio
          </NavLink>

          <NavLink 
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? "active" : "" } ` } 
            to="/sobre-mi"
          >
            Sobre mi
          </NavLink>

          <NavLink 
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? "active" : "" } ` }
            to="/proyectos"
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
            to="/Habilidades"
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