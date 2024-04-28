import styled from "styled-components";

export const Section = styled.section`
  &.contain__skill {
    width: 100%;
    padding: 0px 20px 20px;
    padding-top: 70px;
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

  header {
    margin-bottom: 30px;
  } 

  header h1 {
    font-size: 3rem;
    line-height: 1;
  }

  .contain__skill--grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4vw;
    width: 100%;
    place-items: center;
  }

  .contain__skill--grid-box {
    border-radius: 15px;
    background: rgba(46, 53, 65, 0.1);
    width: 14vw;
  }

  .contain__skill--grid-img {
    height: 80px;
  }

  .contain__skill--grid-title {
    font-weight: bold;
  }

  @media (max-width: 640px) {
    .contain__skill--grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .contain__skill--grid-box {
      width: 60vw;
    }

    .contain__skill--grid-box:last-child {
      margin-bottom: 20px;
    }

    .grow:hover{
      -webkit-transform: none;
      transform: none;
    }
  }
`;