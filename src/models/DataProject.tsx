import coffeeList from '../assets/img/coffee-list.jpg';
import banco2 from '../assets/img/banco2.jpg';
import SIRO from '../assets/img/SIRO.png';
import corpoboyaca from '../assets/img/corpoboyacá.png';
import translateApp from '../assets/img/translate-app.jpg';
import Roalytics from '../assets/img/Roalytics.png';
import Colrunners from '../assets/img/Colrunners.png';
import { CardData  } from './Card';

export const WorkProjects = [
  {
    name: "Colrunners",
    img: Colrunners,
    information: "En COLRUNNERS promueven el estilos de vida saludable a través de la planeación, dirección y acompañamiento del proceso deportivo de sus usuarios. Llevan 6 años de trayectoria acompañando a cientos de personas a alcanzar sus metas deportivas, mejora en su condición física enfocados en contribuir en un equilibrio y bienestar integral.",
    technologies: ['HTML', 'CSS3', "Styled-Component", "React", "JavaScript"],
    urlProject: "",
  },
  {
    name: "Roalytics",
    img: Roalytics,
    information: "Se integran a las herramientas de marketing de un negocio para presentar de forma clara un dashboard de métricas que permita optimizar el rendimiento de las acciones de marketing aumentando la rentabilidad de la empresa. Ayudan a empresas a optimizar la rentabilidad de su marketing para escalar más rápido a través de la claridad en sus números reales.",
    technologies: ['HTML', 'CSS3', "Styled-Component", "React", "JavaScript"],
    urlProject: "",
  },
  {
    name: "Banco2.",
    img: banco2,
    information: "En BancO2 unen empresas, gobiernos y comunidades rurales, campesinas y étnicas en torno a la conservación de ecosistemas naturales de Colombia, a través de pagos por servicios ambientales para la promoción y protección del medio ambiente en el país.",
    technologies: ['HTML', 'CSS3', "JavaScript", "Bootstrap"],
    urlProject: "https://banco2.com/",
  },
  {
    name: "Siro Portal.",
    img: SIRO,
    //information: "SIRO es un sistema que permite a los usuarios realizar toda la gestión tramitada en la Secretaría de Infraestructura Física del Municipio de Medellín, facilitando realizar los flujos de trabajo por medio de sus diferentes módulos.",
    information: (
      <>
        <span>
          SIRO es un sistema que permite a los usuarios realizar toda la gestión tramitada en la Secretaría de Infraestructura Física del Municipio de Medellín, facilitando realizar los flujos de trabajo por medio de sus diferentes módulos.
        </span>
        <ul style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw", paddingLeft: "20px"}}>
          <li>Administración</li>
          <li>Anteproyectos</li>
          <li>Multimedia</li>
          <li>Puentes</li>
          <li>Obras</li>
          <li>Bache</li>
        </ul>
      </>
    ),
    technologies: ['HTML', 'CSS3', "JavaScript"],
    urlProject: "https://www.medellin.gov.co/es/secretaria-infraestructura-fisica/siro/",
  },
  {
    name: "Corpoboyaca.",
    img: corpoboyaca,
    information: "Corpoboyacá es una entidad ambiental colombiana encargada de la gestión, conservación y protección de los recursos naturales y el medio ambiente. en el departamento de Boyacá. Su función principal es velar por el uso sostenible de los recursos naturales y promover el desarrollo sostenible en la región. Esto implica la regulación de actividades que puedan impactar el medio ambiente.",
    technologies: ['HTML', 'CSS3', "JavaScript"],
    urlProject: "https://www.corpoboyaca.gov.co/",
  }
]

export const PersonalProjects: CardData [] = [
  {
    name: "Coffee List.",
    img: coffeeList,
    information: (
      <span>
        Este proyecto es un desafío del sitio web <a href="https://devchallenges.io">devchallenges.io</a>, que consiste en un listado de cafés. Incluye un filtro que permite visualizar "Todos los productos" o solo los "Disponibles ahora". Al utilizar este filtro, se añade un esqueleto durante 1 segundo para mostrar una precarga.
      </span>
    ),
    technologies: ['HTML', 'CSS3', "Styled-component", 'React', "JavaScript"],
    nameChallenge: "devchallenges.io",
    urlPageChallenge: "https://devchallenges.io/challenge/simple-coffee-listing",
    urlProject: "https://foronda94.github.io/coffee-list/",
  },
  {
    name: "Translate App.",
    img: translateApp,
    information: (
      <span>
        Este Proyecto es un desafio del sitio WEB{' '}
        <a href="https://devchallenges.io">devchallenges.io</a>, el cual consiste en un listado de cafes.
        Tiene un filtro donde se observan "Todos los productos" o "Disponible ahora", y estas
      </span>
    ),
    technologies: ['HTML', 'CSS3', "Styled-component", 'React', "JavaScript", "TypeScript"],
    nameChallenge: "devchallenges.io",
    urlPageChallenge: "https://devchallenges.io/challenge/translate-app",
    urlProject: "https://foronda94.github.io/dev-challenges-translate-app/"
    // Descripcion poryecto para el modal
    // Para la parte de 
  },
]

