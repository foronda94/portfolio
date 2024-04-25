import { useState } from 'react';
import Swal from 'sweetalert2';
import { PersonalProjects, WorkProjects } from '../../models/DataProject';
import Modal from '../../components/Modal';
import { CardData } from '../../models/Card';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ContainerProject } from './components/ContainerProject';

export const Project = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState<any>({});

  const handleOpenModal = (modal: CardData) => {
    console.log('modal', modal);
    setModalOpen(true);
    setCurrentModalData(modal)
  }

  console.log('currentModalData', currentModalData.urlProject);
  

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  console.log('modalOpen', modalOpen);

  const handleAlertProject = () => {
    Swal.fire({
      icon: "info",
      title: "Oops...",
      text: "El proyecto aún no ha salido a producción.",
    });
    handleCloseModal();
  }
  

  return (
    <div className="container-section animate__animated animate__fadeIn">
      <ContainerProject 
        nameContainer="Proyectos." 
        dataProject={WorkProjects} 
        handleOpenModal={handleOpenModal}
        gridTemplateColumns="repeat(3, 1fr)"
      />
      <ContainerProject 
        nameContainer="Desafios." 
        dataProject={PersonalProjects} 
        handleOpenModal={handleOpenModal}
        gridTemplateColumns="repeat(2, 0fr)"
       />
      <Modal isOpen={modalOpen} onClose={handleCloseModal} >
        <header className='d-flex justify-content-between align-items-center'>
          <h2>{currentModalData.name}</h2>
          <span className='cursor-pointer' onClick={handleCloseModal}>
            <HighlightOffIcon />
          </span>
        </header>
        <footer style={{height: "-webkit-fill-available", position: "relative"}}>
          <p>{currentModalData.information}</p>
          {
              currentModalData.urlProject === ""
              ?
                <button 
                  className='btn btn-primary'
                  onClick={handleAlertProject}
                  style={{width: "100%", position: "absolute", bottom: "0px"}}
                >
                  Ver Proyecto
                </button>
              :
                <a 
                  className='btn btn-primary'
                  onClick={handleCloseModal}
                  href={currentModalData.urlProject}
                  target="_blank"
                  style={{width: "100%", position: "absolute", bottom: "0px"}}
                >
                  Ver Proyecto
                </a>
          }
        </footer>
      </Modal>
    </div>
  )
}
