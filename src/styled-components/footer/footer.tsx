import styled from "styled-components";


export const FooterStyled = styled.footer`
  &.footer {
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important;
    --bs-bg-opacity: 1;
    padding: 20px 0;
  }

  .footer__container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer__links {
    display: flex;
    gap: 20px;
  }

  .footer__link {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
  }

  .footer__link svg {
    margin-right: 5px;
  }

  .footer__link:hover {
    color: rgba(255, 255, 255, .75);
  }

  .footer__info {
    color: #fff;
    font-size: 14px;
  }

  @media (max-width: 640px) {
    .footer__container {
      flex-direction: column;
    }

    .footer__info {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;