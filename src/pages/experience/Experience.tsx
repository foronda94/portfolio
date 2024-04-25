import { dataExperience } from '../../models/DataExperience'

export const Experience = () => {
  return (
    <section className='container-section animate__animated animate__fadeIn' style={{width: "100%", padding: "0px 20px 20px 20px"}}>
      <header style={{marginBottom: "30px"}}>
        <h1 style={{fontSize: "3rem", lineHeight: "1" }}>Experiencia.</h1>
      </header>
      <footer>
        {dataExperience.map((experience) => (
          <article className='d-flex align-items-center mb-5'>
            <div className='ponerleBEM'>
              <h4>{experience.position}</h4>
              <span>{experience.date}</span>
            </div>
            <div style={{width: "60vw"}}>
              <h4>{experience.name}</h4>
              <p style={{fontSize: "18px"}}>{experience.info}</p>
            </div>
          </article>
        ))}
      </footer>
    </section>
  )
}
