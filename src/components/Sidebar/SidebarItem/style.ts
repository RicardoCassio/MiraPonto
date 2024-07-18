import styled from "styled-components";

export const ContainerSidebarItem = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 0.5rem;

  background-color: transparent;
  border: none;
  padding: 1rem;
  color: ${props => props.theme['white']};
  cursor: pointer;
  width: 100%;

  transition: 0.8s background-color;

  &:hover {
    background-color: black;
  }

  
`