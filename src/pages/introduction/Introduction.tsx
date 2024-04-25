//import perfil from '../../assets/img/vite.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import perfil from '../../assets/img/foto-perfil.jfif';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import urlPDF from '../../assets/pdf/Bryan Stiven Foronda Agudelo CV.docx.pdf'
import { Section } from '../../styled-components/profile/profile';

export const Introduction = () => {

  const handleDownload = () => {
    // Lógica para descargar el archivo PDF
    const url = urlPDF;
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Bryan Stiven Foronda Agudelo CV';
    anchor.click();
  };

  return (
    <Section className="animate__animated animate__fadeIn container-profile profile">
      <header>
        <img src={perfil} alt="logo" loading="lazy" width="300" height="300" className="profile__img--radio" />
      </header>
      <footer className='profile__content'>
        <h2 className='profile__content--title'>Bryan Foronda Agudelo.</h2>
        <p className='profile__content--title-2'>Desarrollador Web React JS {"</>"}</p>
        <p className='profile__content--description'>Con +5 años de experiencia en diseño y desarrollo de aplicaciones web utilizando tecnologias front-end. Amante de la programación y el aprendizaje.</p>
        <div className='d-flex justify-content-end'>
          <button
            className='btn myProfile__btn'
            onClick={handleDownload}
          >
            Descargar CV
            <span className='ml-2'>
              <FontAwesomeIcon icon={faDownload} />
            </span>
          </button>
        </div>
      </footer>
    </Section>
  )
}
