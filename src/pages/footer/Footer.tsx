import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; // Estilo CSS para el footer

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <a href="mailto:brianforonda94@gmail.com" className="footer__link">
            <FaEnvelope /> Correo
          </a>
          <a href="https://www.linkedin.com/tuperfil" className="footer__link" target='_blank'>
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/tuusuario" className="footer__link" target='_blank'>
            <FaGithub /> GitHub
          </a>
          {/* Agrega más enlaces aquí según necesites */}
        </div>
        <div className="footer__info">
          {/* Información adicional, como derechos de autor, etc. */}
          © 2024 Bryan Foronda Agudelo{"</>"} Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
