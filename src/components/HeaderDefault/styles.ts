import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem;
  background-color: ${props => props.theme['primaary-color']};
  box-shadow: 0 0 20px 3px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  img {
    width: 70px;
    height: 70px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    border-radius: 100px;
    border: 2px solid ${props => props.theme['success-color']};

    background-color: ${props => props.theme['secondary-color']};
    background-size: cover;
  }
`