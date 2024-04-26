import React, { useState } from 'react';
import { ModalProps } from '../models/Modal';
//import './Modal.css'; // Estilos para la modal

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 300); // Tiempo de animación en milisegundos
  };

  if (!isOpen && !isAnimating) return null;
  
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
