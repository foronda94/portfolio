import { dataExperience } from '../../models/DataExperience'
import { Section } from '../../styled-components/experience/Experience'

export const Experience = () => {
  return (
    <Section className='container-section animate__animated animate__fadeIn'>
      <header>
        <h1>Experiencia.</h1>
        <span className='container__project--header-underline'></span>
      </header>
      <footer>
        {dataExperience.map((experience, i: number) => (
          <article className='d-flex align-items-center mb-5' key={i}>
            <div className='experience__content--button'>
              <h4>{experience.position}</h4>
              <span>{experience.date}</span>
            </div>
            <div className='experience__content--description'>
              <h4>{experience.name}</h4>
              <p>{experience.info}</p>
            </div>
          </article>
        ))}
      </footer>
    </Section>
  )
}
