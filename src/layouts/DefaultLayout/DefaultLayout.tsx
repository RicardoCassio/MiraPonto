import { Outlet } from "react-router-dom";
import { HeaderDefault } from "../../components/HeaderDefault/HeaderDefault";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ContainerWrapper } from "./styles";
import { useState } from 'react'

export function DefaultLayout() {
  const [ShowSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      <HeaderDefault setShowSidebar={setShowSidebar} />
      <ContainerWrapper>
        <Sidebar ShowSidebar={ShowSidebar} />
        <Outlet />
      </ContainerWrapper>
    </div>
  );
}
