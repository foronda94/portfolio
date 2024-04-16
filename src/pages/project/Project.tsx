import React, { useState } from 'react'
import { Card } from '../../components/Card';
import { PersonalProjects } from '../../models/DataCard';
import Modal from '../../components/Modal';
import { CardData } from '../../models/Card';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const Project = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState<any>({});

  const handleOpenModal = (modal: CardData) => {
    console.log('modal', modal);
    setModalOpen(true);
    setCurrentModalData(modal)
  }

  console.log('currentModalData', currentModalData);
  

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  console.log('modalOpen', modalOpen);
  

  return (
    <div className="animate__animated animate__fadeIn">
      <header>
        <h1 style={{fontSize: "3rem", lineHeight: "1" }}>Desafios</h1>
      </header>
      <footer>
        <Card dataProject={PersonalProjects} handleOpenModal={handleOpenModal} />
        {/* Acá va la modal y la logica para ella */}
        <Modal isOpen={modalOpen} onClose={handleCloseModal} >
          <header className='d-flex justify-content-between align-items-center'>
            <h2>{currentModalData.name}</h2>
            <span className='cursor-pointer' onClick={handleCloseModal}>
              <HighlightOffIcon />
            </span>
          </header>
          <footer style={{height: "-webkit-fill-available", position: "relative"}}>
            <p>{currentModalData.information}</p>
            <a 
              className='btn btn-primary' 
              onClick={handleCloseModal}
              href={currentModalData.urlChallenge}
              target="_blank"
              style={{width: "100%", position: "absolute", bottom: "0px"}}
            >
              Ver Proyecto
            </a>
          </footer>
        </Modal>
      </footer>
    </div>
  )
}
