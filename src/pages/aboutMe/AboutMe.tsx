import { Section } from "../../styled-components/aboutMe/AboutMe"


export const AboutMe = () => {

  return (
    <Section className="container-section animate__animated animate__fadeIn">
      <header>
        <h1>Sobre mi.</h1>
        <span className='container__project--header-underline'></span>
      </header>
      <footer>
        <p>¡Hola! Soy Bryan Stiven Foronda Agudelo, un apasionado Tecnólogo en análisis y desarrollo de sistemas de información. Desde que inicié mi carrera, me he dedicado a perfeccionar mis habilidades en el desarrollo de software, siempre buscando mejorar tanto profesional como personalmente.</p>
        <p>Con una sólida experiencia como Desarrollador React en New Click Soluciones, he contribuido al desarrollo de proyectos como ColRunners y Roalytics, donde he destacado por mi capacidad para implementar las mejores prácticas de programación.</p>
        <p>Mi trayectoria incluye también roles como Desarrollador Web JavaScript en H&G Consultores S.A.S, donde he participado en proyectos como Corpoboyaca y Siro Portal, demostrando mi habilidad para crear interfaces intuitivas y funcionales.</p>
        <p>Además de mi experiencia laboral, he invertido en mi educación continua, adquiriendo habilidades en tecnologías como HTML, CSS, JavaScript, TypeScript y ReactJS, así como en conceptos fundamentales como Clean Code, lo que me permite mantenerme al día con las últimas tendencias y herramientas en el campo del desarrollo de software.</p>
        {/*<p>Mi enfoque proactivo, mi capacidad para trabajar en equipo y mi pasión por el intercambio de conocimientos me han permitido no solo sobresalir en mis roles anteriores, sino también cultivar relaciones sólidas con colegas y colaboradores.</p>*/}
        <p>Estoy emocionado de seguir creciendo profesionalmente y enfrentar nuevos desafíos que me permitan seguir contribuyendo al mundo del desarrollo de software. Siempre estoy abierto a nuevas oportunidades y dispuesto a aportar mi experiencia y habilidades a proyectos innovadores y dinámicos.</p>
      </footer>
    </Section>
  )
}
