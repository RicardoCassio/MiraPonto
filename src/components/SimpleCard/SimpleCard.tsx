import { ContainerSimpleCard } from "./styles";

interface SimpleCardProps {
  title: string;
  value: string;
}

export function SimpleCard({title, value}: SimpleCardProps) {
  return (
      <ContainerSimpleCard>
        <h2>{title}</h2>
        <h3>{value}</h3>
      </ContainerSimpleCard>
  )
}