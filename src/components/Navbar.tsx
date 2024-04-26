import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNavMenu = () => setIsNavCollapsed(true);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className="navbar-brand" to="/">
        Bryan Foronda Agudelo{"</>"}
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded={!isNavCollapsed ? true : false} 
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div 
        className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} 
        id="navbarSupportedContent"
      >
        <div className="navbar-nav w-100 justify-content-end">
          <NavLink className="nav-item nav-link" to="/portfolio/" onClick={closeNavMenu}>Inicio</NavLink>
          <NavLink className="nav-item nav-link" to="/portfolio/sobre-mi" onClick={closeNavMenu}>Sobre mi</NavLink>
          <NavLink className="nav-item nav-link" to="/portfolio/proyectos" onClick={closeNavMenu}>Proyectos</NavLink>
          <NavLink className="nav-item nav-link" to="/portfolio/experiencia" onClick={closeNavMenu}>Experiencia</NavLink>
          <NavLink className="nav-item nav-link" to="/portfolio/habilidades" onClick={closeNavMenu}>Habilidades</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
