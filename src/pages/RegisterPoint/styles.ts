import styled from "styled-components";

export const ContainerRegisterPoint = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

export const HeaderRegisterPoint = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ButtonRegisterPoint = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 1s background-color;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  background-color: ${props => props.theme['primary-color2']};
  color: ${props => props.theme['text-color2']};
  font-weight: bold;
  font-size: 1.2rem;
  width: 20rem;
  height: 4rem;

  &:hover {
    background-color: ${props => props.theme['primary-color3']};;
  }
`

export const ContainerFilter = styled.section`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 1.2rem;
  }

  input {
    height: 2.2rem;
    border-radius: 8px;
    border: none;
    padding: 8px;
    font-size: 1.2rem;

    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  }
`

export const ContainerHistory = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 2rem;

  h1 {
    font-size: 1.7rem;
  }
`

export const HistoryList = styled.section`
  display: flex;
  flex: 1;
  overflow: auto;

  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${props => props.theme['secondary-color2']};
      padding: 1rem;
      text-align: left;
      color: ${props => props.theme['text-color2']};
      font-size: 1rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${props => props.theme['secondary-color']};
      border-top: 4px solid ${props => props.theme['secondary-color2']};
      color: ${props => props.theme['text-color2']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
        
      &:first-child {
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
  
`