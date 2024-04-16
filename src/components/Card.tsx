import React from "react";
import { CardData, CardProps  } from "../models/Cars"

export const Card: React.FC<CardProps> = ({dataProject, handleOpenModal} ) => {
  
  return (
    <section style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "5vw"}}>
      {
        dataProject.map((project: CardData, i: number) => (
          <article style={{ width: "25vw",background: "#212529", borderRadius: "10px", display: "grid", grid: '"preview" minmax(56.25%,auto) "content" auto/minmax(0,100%)', position: "relative", height: "100%", zIndex: "1" }} key={i}>
            <div className="ejemplo"></div>
            <header style={{ zIndex: "9" }}>
              <img src={project.img} alt="project" height="10px" style={{ maxWidth: "-webkit-fill-available", borderRadius: "10px", backgroundAttachment: "revert-layer", width: "100%", display: "block", minHeight: "192px", objectFit: "cover"}} />
            </header>
            <footer style={{ padding: "10px 15px",zIndex: "9", color: "rgb(255, 255, 255)", position: "relative", bottom: "30px" }}>
              <h4>{project.name}</h4>
              {project.nameChallenge && <h6>Desafio de: <a href={project.urlPageChallenge} target="_blank">{project.nameChallenge}</a></h6>}
              <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
                {
                  project.technologies.map((technologie: string, i: number) => (
                    <span key={i} style={{ background: "#555555", borderRadius: "10px", padding: "7px",marginRight: "5px", marginTop: "5px"}}>{technologie}</span>
                  ))
                }
              </div>
              <div style={{marginTop: "10px"}}>
                <button
                  style={{width: "100%"}} className="btn btn-primary"
                  onClick={() => handleOpenModal(project)}
                >
                  Ver
                </button>
                {/*<a style={{width: "100%"}} className="btn btn-primary" href={ project.urlChallenge } target="_blank">Ver</a>*/}
              </div>
            </footer>
          </article>
        ))
      }
    </section>
  )
}
