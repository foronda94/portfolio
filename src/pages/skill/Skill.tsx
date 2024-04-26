import { DataSkill } from '../../models/DataSkill';
import { SkillItem } from '../../models/Skill';
import { Section } from '../../styled-components/skill/Skill';

export const Skill = () => {
  return (
    <Section className='container-section animate__animated animate__fadeIn contain__skill'>
      <header>
        <h1>Habilidades.</h1>
      </header>
      <footer>
        <section className='contain__skill--grid'>
          {
            DataSkill.map(( skill: SkillItem ) => (
              <article className='grow contain__skill--grid-box p-2'>
                <span className='d-flex justify-content-center align-items-center flex-column'>
                  {
                    (skill.name === 'Styled-Components' || skill.name === 'TypeScript')
                    ? (typeof skill.logo === 'string' 
                       ? <img src={skill.logo} className="contain__skill--grid-img" alt={skill.name} />
                       : skill.logo)
                    : skill.logo
                  }
                  <p className="contain__skill--grid-title">{skill.name}</p>
                </span>
              </article>
            ))
          }
        </section>
      </footer>
    </Section>
  )
}
