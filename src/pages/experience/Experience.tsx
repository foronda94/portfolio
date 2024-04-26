import { dataExperience } from '../../models/DataExperience'
import { Section } from '../../styled-components/experience/Experience'

export const Experience = () => {
  return (
    <Section className='container-section animate__animated animate__fadeIn'>
      <header>
        <h1>Experiencia.</h1>
      </header>
      <footer>
        {dataExperience.map((experience) => (
          <article className='d-flex align-items-center mb-5'>
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
