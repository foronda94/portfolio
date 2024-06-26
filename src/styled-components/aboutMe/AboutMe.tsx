import styled from "styled-components";


export const Section = styled.section`

  &.container-section {
    margin-top: 70px;
  }

  header {
    margin-bottom: 30px;
  }

  header h1 {
    font-size: 3rem;
    line-height: 1;
  }

  @media (max-width: 640px) {
    &.animate__fadeIn {
      margin-top: 70px;
      padding: 0px 20px 20px;
    }
  }

`;