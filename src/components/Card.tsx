import React from "react";
import { CardData  } from "../models/Card"
import { SectionCard } from "../styled-components/project/Project";

export const Card: React.FC<any> = ({dataProject, handleOpenModal, gridTemplateColumns} ) => {
  
  return (
    <SectionCard className="card__section" gridTemplateColumns={gridTemplateColumns}>
      {
        dataProject.map((project: CardData, i: number) => (
          <article className="card__content" key={i}>
            <div className="card__content--hover"></div>
            <header>
              <img src={project.img} alt="project" height="10px" />
            </header>
            <footer className="card__content--info">
              <h4>{project.name}</h4>
              {project?.nameChallenge && <h6>Desafio de: <a href={project.urlPageChallenge} target="_blank">{project.nameChallenge}</a></h6>}
              <div className="card__content--tag">
                {
                  project.technologies.map((technologie: string, i: number) => (
                    <span key={i} className="card__content--tag-description">{technologie}</span>
                  ))
                }
              </div>
              <div className="mt-2">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleOpenModal(project)}
                >
                  Ver Información
                </button>
              </div>
            </footer>
          </article>
        ))
      }
    </SectionCard>
  )
}
