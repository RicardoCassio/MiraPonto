import { ContainerSidebarItem } from "./style";
import Icon from 'phosphor-react'

interface SidebarItemProps {
  icon: Icon.IconProps;
  nameItem: string;
}

export function SidebarItem(props: SidebarItemProps) {
  return (
    <ContainerSidebarItem >
      <>
        {props.icon}
      </>
      <p>{props.nameItem}</p>
    </ContainerSidebarItem>
  )
}