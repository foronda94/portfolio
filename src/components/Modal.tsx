import { useState } from 'react';
import { ModalProps } from '../models/Modal';

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 300);
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
