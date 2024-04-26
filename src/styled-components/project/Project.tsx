import styled from "styled-components";


export const Section = styled.section`
  &.animate__fadeIn {
    margin-top: 70px;
  }

  h1 {
    font-size: 3rem;
    line-height: 1;
  }

  .modal__footer {
    height: -webkit-fill-available;
    position: relative;
  }

  .modal__footer--button, .modal__footer--a {
    width: 100%;
    position: absolute;
    bottom: 0px;
  }

  .modal__content-siro {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1vw;
    padding-left: 20px;
  }

  .open {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000b8;
  }
  
  .modal-content {
    width: 35%;
    height: 50%;
    padding: 20px;
  }

  .cursor-pointer > svg{
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
  }

  .cursor-pointer svg:hover {
    color: red;
    transform: scale(1.2);
    transition: 1s ease;
  }

  .grow{
    transition: 1s ease;
    padding-top: 15px !important;
  }
    
  .grow:hover{
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
  }

  .container__challenge--margin-bottom header {
    margin-bottom: 3rem !important;
  }

  .container__challenge--margin-bottom:last-child {
    margin-top: 40px !important;
    margin-bottom: 100px !important;
  }

  @media (max-width: 640px) {
    .modal-content {
      width: 80vw;
      height: auto;
    }

    .modal__footer {
      padding-bottom: 35px;
    }
    
    .modal__content-siro {
      grid-template-columns: repeat(1, 1fr);
    }

    .container__challenge--margin-bottom header {
      margin-bottom: 2rem !important;
    }

    .container__challenge--margin-bottom:last-child {
      margin-top: 70px !important;
      margin-bottom: 80px !important;
    }

  }
`;

export const SectionCard = styled.section<{ gridTemplateColumns: string }>`
  &.card__section {
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns};
    gap: 5vw;
  }

  .card__content {
    width: 23vw;
    background: rgb(33, 37, 41);
    border-radius: 10px;
    display: grid;
    position: relative;
    height: 100%;
    z-index: 1;
  }

  .card__content header {
    z-index: 9;
  }

  .card__content img {
    max-width: -webkit-fill-available;
    border-radius: 10px;
    background-attachment: revert-layer;
    width: 100%;
    display: block;
    min-height: 192px;
    object-fit: cover;
  }


  .card__content--hover {
    --radius: 10px;
    --inset: 2rem;
    --inset-right: 0;
    --offset: -1rem;
    --inset-bottom: 0;
    --inset-left: calc(var(--inset) / 2);
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0px;
    left: 0;
    margin: var(--offset);
    border-radius: var(--radius);
    overflow: hidden;
    background: hsl(232.5deg 11.76% 13.33%);
    color: var(--cp-grid-item-color);
    clip-path: inset(var(--inset-top, var(--inset)) var(--inset-right, var(--inset)) var(--inset-bottom, var(--inset)) var(--inset-left, var(--inset)) round var(--radius));
    contain: strict;
    transition: clip-path .3s ease .1s;
  }

  article:hover .card__content--hover {
    clip-path: inset(0 0 0 0 round var(--radius));
    transition-delay: 0s;
    cursor: pointer;
  }

  .card__content--info {
    padding: 10px 15px;
    z-index: 9;
    color: rgb(255, 255, 255);
    position: relative;
  }

  .card__content--tag {
    display: flex;
    flex-flow: wrap;
  }

  .card__content--tag-description {
    background: rgb(85, 85, 85);
    border-radius: 10px;
    padding: 7px;
    margin-right: 5px;
    margin-top: 5px;
  }

  @media (max-width: 640px) {
    &.card__section {
      grid-template-columns: repeat(1, 1fr);
      gap: 15vw;
    }

    .card__content--hover {
      clip-path: inset(0 0 0 0 round var(--radius));
      transition-delay: 0s;
      cursor: pointer;
    }
    
    .card__content {
      width: 80vw;
      top: 30px;
    }
  }
`;