import styled from 'styled-components';

export const Section = styled.section`

  &.profile {
    display: flex;
    align-items: center;
  }

  .profile__img--radio {
    border-radius: 20vw;
  }

  .profile__content {
    width: 45vw;
    margin-left: 30px;
  }

  .profile__content--title {
    font-size: 3rem;
    line-height: 1;
  }

  .profile__content--title-2 {
    font-size: 2rem;
    line-height: 1;
  }

  .profile__content--description {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  .container-profile {
    margin-bottom: 50px;
  }

  .myProfile__btn {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
    color: #fff;
  }

  .myProfile__btn span {
    margin-left: 5px;
  }

  .myProfile__btn:hover {
    color: rgba(255, 255, 255, .75);
  }

  @media (max-width: 640px) {
    &.profile {
      flex-direction: column;
      margin-top: 40px;
    }

    .profile__img--radio {
      border-radius: 100vw;
      margin-top: 40px;
      width: 200px;
      height: 200px;
    }

    .profile__content {
      width: 100vw;
      padding: 20px;
      margin-left: 0;
    }

    .profile__content--title {
      font-size: 2.5rem;
      line-height: 1;
    }

    .profile__content--title-2 {
      font-size: 1.3rem;
      line-height: 1;
    }

    .profile__content--description {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
`;