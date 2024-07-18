import styled from "styled-components";

export const ContainerSimpleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  height: 7rem;
  width: 100%;

  background-color: ${props => props.theme['success-color']};
  color: ${props => props.theme['white']};

  border-radius: 8px;
  box-shadow: 2px 0px 20px black;

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 2rem;
  }

`