import { Plus } from "phosphor-react";
import { ButtonRegisterPoint, ContainerFilter, ContainerHistory, ContainerRegisterPoint, HeaderRegisterPoint, HistoryList } from "./styles";

export function RegisterPoint() {
  return (
    <>
      <ContainerRegisterPoint>
        <HeaderRegisterPoint>
          <ButtonRegisterPoint>
            <Plus size={32}/>
            Registrar Ponto
          </ButtonRegisterPoint>
          <ContainerFilter>
            <div>
              De: 
              <input type="date" />
            </div> 
            <div>
              Ate: 
              <input type="date" />
            </div> 
          </ContainerFilter>
        </HeaderRegisterPoint>
        <ContainerHistory>
          <h1>Histórico de Pontos</h1>

          <HistoryList>
            <table>
              <thead>
                <tr>
                  <th>Data de Registro</th>
                  <th>Hora de Entrada</th>
                  <th>Hora de Saída</th>
                  <th>Total de Horas Trabalhadas</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>16/07/2024</td>
                  <td>08:00</td>
                  <td>12:00</td>
                  <td>04:00</td>
                  <td>Teste</td>
                </tr>
                <tr>
                  <td>16/07/2024</td>
                  <td>08:00</td>
                  <td>12:00</td>
                  <td>04:00</td>
                  <td>Teste</td>
                </tr>
                <tr>
                  <td>16/07/2024</td>
                  <td>08:00</td>
                  <td>12:00</td>
                  <td>04:00</td>
                  <td>Teste</td>
                </tr>
                <tr>
                  <td>16/07/2024</td>
                  <td>08:00</td>
                  <td>12:00</td>
                  <td>04:00</td>
                  <td>Teste</td>
                </tr>
                <tr>
                  <td>16/07/2024</td>
                  <td>08:00</td>
                  <td>12:00</td>
                  <td>04:00</td>
                  <td>Teste</td>
                </tr>
                <tr>
                  <td>16/07/2024</td>
                  <td>08:00</td>
                  <td>12:00</td>
                  <td>04:00</td>
                  <td>Teste</td>
                </tr>
                <tr>
                  <td>16/07/2024</td>
                  <td>08:00</td>
                  <td>12:00</td>
                  <td>04:00</td>
                  <td>Teste</td>
                </tr>
                <tr>
                  <td>16/07/2024</td>
                  <td>08:00</td>
                  <td>12:00</td>
                  <td>04:00</td>
                  <td>Teste</td>
                </tr>
                <tr>
                  <td>16/07/2024</td>
                  <td>08:00</td>
                  <td>12:00</td>
                  <td>04:00</td>
                  <td>Teste</td>
                </tr>
                <tr>
                  <td>16/07/2024</td>
                  <td>08:00</td>
                  <td>12:00</td>
                  <td>04:00</td>
                  <td>Teste</td>
                </tr>
              </tbody>
            </table>

          </HistoryList>
        </ContainerHistory>
      </ContainerRegisterPoint>
    </>
  )
}