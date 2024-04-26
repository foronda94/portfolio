import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FooterStyled } from '../../styled-components/footer/footer';

export const Footer: React.FC = () => {
  return (
    <FooterStyled className="footer">
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
        </div>
        <div className="footer__info">
          <span>© 2024 Bryan Foronda Agudelo{"</>"}</span>
          <span> Todos los derechos reservados.</span>
        </div>
      </div>
    </FooterStyled>
  );
};
