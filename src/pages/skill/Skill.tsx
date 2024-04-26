import { DataSkill } from '../../models/DataSkill';
import { SkillItem } from '../../models/Skill';

export const Skill = () => {
  return (
    <section className='container-section animate__animated animate__fadeIn' style={{width: "100%", padding: "0px 20px 20px 20px"}}>
      <header style={{marginBottom: "30px"}}>
        <h1 style={{fontSize: "3rem", lineHeight: "1" }}>Habilidades.</h1>
      </header>
      <footer>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4vw", width: "100%", justifyItems: "center", alignItems: "center" }}>
          {
            DataSkill.map(( skill: SkillItem ) => (
              <article className='grow  p-2' style={{borderRadius: "15px", background: "rgb(46 53 65 / 10%)", width: "14vw"}}>
                <span className='d-flex justify-content-center align-items-center flex-column'>
                  {
                    (skill.name === 'Styled-Components' || skill.name === 'TypeScript')
                    ? (typeof skill.logo === 'string' 
                       ? <img src={skill.logo} style={{height: "80px"}} alt={skill.name} />
                       : skill.logo)
                    : skill.logo
                  }
                  <p style={{fontWeight: "bold"}}>{skill.name}</p>
                </span>
              </article>
            ))
          }
        </section>
      </footer>
    </section>
  )
}
