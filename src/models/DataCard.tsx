import coffeeList from '../assets/img/coffee-list.jpg'
import translateApp from '../assets/img/translate-app.jpg'
import { CardData  } from './Card'

export const WorkProjects = [
  {
    name: "",
    img: "",
    information: "",
    technologies: [],
  }
]

export const PersonalProjects: CardData [] = [
  {
    name: "Coffee List",
    img: coffeeList,
    information: (
      <span>
        Este proyecto es un desafío del sitio web <a href="https://devchallenges.io">devchallenges.io</a>, que consiste en un listado de cafés. Incluye un filtro que permite visualizar "Todos los productos" o solo los "Disponibles ahora". Al utilizar este filtro, se añade un esqueleto durante 1 segundo para mostrar una precarga.
      </span>
    ),
    technologies: ['React', "JavaScript", 'HTML', 'CSS3', "Styled-component"],
    nameChallenge: "devchallenges.io",
    urlPageChallenge: "https://devchallenges.io/challenge/simple-coffee-listing",
    urlChallenge: "https://foronda94.github.io/coffee-list/",
  },
  {
    name: "Translate App ",
    img: translateApp,
    information: (
      <span>
        Este Proyecto es un desafio del sitio WEB{' '}
        <a href="https://devchallenges.io">devchallenges.io</a>, el cual consiste en un listado de cafes.
        Tiene un filtro donde se observan "Todos los productos" o "Disponible ahora", y estas
      </span>
    ),
    technologies: ['React', "JavaScript", "TypeScript", 'HTML', 'CSS3', "Styled-component"],
    nameChallenge: "devchallenges.io",
    urlPageChallenge: "https://devchallenges.io/challenge/translate-app",
    urlChallenge: "https://foronda94.github.io/dev-challenges-translate-app/"
    // Descripcion poryecto para el modal
    // Para la parte de 
  },
]

