import React from 'react'
import { Card } from '../../../components/Card'

export const ContainerProject = ({nameContainer, dataProject, handleOpenModal, gridTemplateColumns}: any) => {
  return (
    <div className='mb-4'>
      <header className='mb-4'>
        <h1 style={{fontSize: "3rem", lineHeight: "1" }}>{nameContainer}</h1>
      </header>
      <footer>
        <Card dataProject={dataProject} handleOpenModal={handleOpenModal} gridTemplateColumns={gridTemplateColumns} />
      </footer>
    </div>
  )
}
