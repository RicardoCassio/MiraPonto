import { SimpleCard } from "../../components/SimpleCard/SimpleCard";
import { ContainerDashboard } from "./styles";

export function Dashboard() {
  return (
    <>
      <ContainerDashboard>
        <SimpleCard
          title = 'Banco de Horas'
          value = '32 horas'
        />

        <SimpleCard
          title = 'Horas Trabalhadas Hoje'
          value = '8 horas'
        />

        <SimpleCard
          title = 'Ultimo Registro'
          value = '18/07/2024 18:00'
        />
      </ContainerDashboard>
    </>
  )
}