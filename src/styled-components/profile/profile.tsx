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

  @media (max-width: 640px) {
    &.profile {
      flex-direction: column !important;
    }

    .profile__img--radio {
      border-radius: 100vw;
    }

    .profile__content {
      width: 100vw;
      padding: 20px;
      margin-left: 0;
    }
  }
`;