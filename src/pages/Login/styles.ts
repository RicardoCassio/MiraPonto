import styled from "styled-components";
import backgroundImage from '../../assets/Background-Login.svg';

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Garante que a altura da tela toda seja usada */
  background-image: url(${backgroundImage});
  background-size: cover;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  height: 9rem;
  margin-left: 1rem;
  padding: 8px;
`;

export const Container = styled.main`
  display: flex;
  flex: 1; /* Faz o main ocupar o espaço restante */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 4rem;
`;

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3.5rem;
    color: ${props => props.theme['white']};
    text-shadow: 2px 2px 2px #000;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 25rem;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
  }

  input {
    background-color: rgba(38, 16, 70, 0.7);
    color: #A4A4A4;
    font-size: 1.3rem;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #a4a4a4;
  }
`;

export const LoginSocialContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  margin-top: 0.5rem;
`;
