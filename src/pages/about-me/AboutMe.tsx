import perfil from '../../assets/img/vite.svg'

export const AboutMe = () => {

  return (
    <section className="col animate__animated animate__fadeIn" style={{display: "flex", alignItems: "center"}}>
      <header>
        <img src={perfil} alt="logo" loading="lazy" width="300" height="300" className=""  />
      </header>
      <footer>
        <h2>Bryan Foronda Agudelo</h2>
        <p>Programador Web React JS {"</>"}</p>
        <p>Desarrollador web React js con experiencia en diseño y desarrollo de aplicaciones web utilizando tecnologias front-end.</p>
      </footer>
    </section>
  )
}
