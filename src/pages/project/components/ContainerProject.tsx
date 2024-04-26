import { Card } from '../../../components/Card'

export const ContainerProject = ({nameContainer, dataProject, handleOpenModal, gridTemplateColumns}: any) => {
  return (
    <div className='mb-5 container__challenge--margin-bottom'>
      <header>
        <h1>{nameContainer}</h1>
        <span className='container__project--header-underline'></span>
      </header>
      <footer>
        <Card dataProject={dataProject} handleOpenModal={handleOpenModal} gridTemplateColumns={gridTemplateColumns} />
      </footer>
    </div>
  )
}
