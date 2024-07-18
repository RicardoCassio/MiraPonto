import styled from "styled-components";

export const ContainerSidebar = styled.aside`
  border: 1px solid black;

  display: flex;
  flex-direction: column;

  height: 100vh;
  background-color: ${props => props.theme['secondary-color']};
  color: ${props => props.theme['white']};
  position: relative;
  min-width: 5rem;

  transition: transform 0.3s ease-in-out;
  transform: translateX(0); 

  &.hidden {
    transform: translateX(-100%);
  }
`