import perfil from '../../assets/img/vite.svg'

export const Introduction = () => {
  return (
    <section className="animate__animated animate__fadeIn" style={{display: "flex", alignItems: "center"}}>
      <header>
        <img src={perfil} alt="logo" loading="lazy" width="300" height="300" className=""  />
      </header>
      <footer style={{ width: "45vw", marginLeft: "30px" }}>
        <h2 style={{fontSize: "3rem", lineHeight: "1" }}>Bryan Foronda Agudelo.</h2>
        <p style={{fontSize: "2rem", lineHeight: "1" }}>Desarrollador Web React JS {"</>"}</p>
        <p style={{fontSize: "1.3rem", lineHeight: "2rem" }}>Con +5 años de experiencia en diseño y desarrollo de aplicaciones web utilizando tecnologias front-end. Amante de la programación y el aprendizaje.</p>
      </footer>
    </section>
  )
}
