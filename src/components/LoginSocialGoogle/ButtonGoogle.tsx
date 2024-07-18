import { GoogleLogo } from "phosphor-react";
import { ContainerButtonGoogle } from "./styles";

export function ButtonGoogle() {
  return (
    <>
      <ContainerButtonGoogle>
        <GoogleLogo size={32} />
        Google
      </ContainerButtonGoogle>
    </>
  )
}