import html from '../../assets/img/skill/html.webp';
import { DataSkill } from '../../models/DataSkill';
import { SkillItem } from '../../models/Skill';

export const Skill = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <header style={{marginBottom: "30px"}}>
        <h1 style={{fontSize: "3rem", lineHeight: "1" }}>Habilidades.</h1>
      </header>
      <footer>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4vw", width: "70vw" }}>
          {
            DataSkill.map(( skill: SkillItem ) => (
              <article className='grow  p-2' style={{borderRadius: "15px", background: "rgb(46 53 65 / 10%)", width: "14vw"}}>
                <span className='d-flex justify-content-center align-items-center flex-column'>
                  <img src={skill.logo} style={{height: "120px"}} alt={skill.name} />
                  <p style={{fontWeight: "bold"}}>{skill.name}</p>
                </span>
              </article>
            ))
          }
        </section>
      </footer>
    </div>
  )
}
