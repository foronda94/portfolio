import styled from "styled-components";


export const Section = styled.section`
  &.animate__fadeIn {
    width: 100%;
    padding: 0px 20px 20px;
    margin-top: 70px;
  }

  header {
    margin-bottom: 30px;
  }

  header h1 {
    font-size: 3rem;
    line-height: 1;
  }

  .experience__content--button {
    height: 13vh;
    width: 20vw;
    margin: 30px 30px 30px 0;
    display: flex;
    flex-direction: column;
    --bs-bg-opacity: 1;
    background: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }

  .experience__content--description {
    width: 60vw;
  }

  .experience__content--description p {
    font-size: 18px;
  }


  @media (max-width: 640px) {
    article {
      flex-direction: column;
      margin-bottom: 0px !important;
    }

    .experience__content--button {
      width: 80vw;
      margin: 30px;
    }

    .experience__content--description {
      width: 80vw;
    }
  }

`;