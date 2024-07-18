import { NavLink } from "react-router-dom";
import { SidebarItem } from "./SidebarItem/SidebarItem";
import { ContainerSidebar } from "./styles";
import { Gauge, Plus, ClockCounterClockwise, ChartBar, Lightbulb } from "phosphor-react";

const sidebarIconsSize = 32;

interface SidebarProps {
  ShowSidebar: boolean;
}

export function Sidebar({ ShowSidebar }: SidebarProps) {
  return (
    <ContainerSidebar className={!ShowSidebar ? 'hidden' : ''}>
      <nav>
        <NavLink to="/home">
          <SidebarItem icon={<Gauge size={sidebarIconsSize} />} nameItem='Dashboard' />
        </NavLink>
        <NavLink to="/point/register">
          <SidebarItem icon={<Plus size={sidebarIconsSize} />} nameItem='Registrar Ponto' />
        </NavLink>
        <SidebarItem icon={<ClockCounterClockwise size={sidebarIconsSize} />} nameItem='Histórico de Pontos' />
        <SidebarItem icon={<ChartBar size={sidebarIconsSize} />} nameItem='Relatórios' />
        <SidebarItem icon={<Lightbulb size={sidebarIconsSize} />} nameItem='Solicitações' />
      </nav>
      
    </ContainerSidebar>
  );
}
