import { Button } from "@mui/material";
import { Container, ContainerBody, HeaderContainer, LoginContainer, LoginSocialContainer } from "./styles";
import { ButtonGoogle } from "../../components/LoginSocialGoogle/ButtonGoogle";
import { ButtonFacebook } from "../../components/LoginSocialFacebook/ButtonFacebook";

import logo from '../../assets/logo.png'

export function Login() {
  return (
    <ContainerBody>
      <HeaderContainer>
        <img src={logo} alt="Logo marca principal" />
      </HeaderContainer>
      <Container>
        <LoginContainer>
          <h1>Entrar</h1>
          <form>
            <input type="email" placeholder="Digite seu E-mail" required/>
            <Button variant="contained" type="submit">Entrar</Button>
          </form>

          
          <div>
            Ou entre com
            <LoginSocialContainer>
              <ButtonGoogle>
              </ButtonGoogle>
              <ButtonFacebook>
                
              </ButtonFacebook>
            </LoginSocialContainer>
            
          </div>
        </LoginContainer>
      </Container>
    </ContainerBody>
  )
}