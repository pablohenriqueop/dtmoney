import { Container } from "./styles";
import { Content } from "../../styles/content";

export function TransactionsTable() {
  return (
    <Container>
      <Content>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Desenvolvimento de Website</td>
              <td className="deposit">RS 12.000,00</td>
              <td>Desenvolvimento</td>
              <td>19/10/1998</td>
            </tr>
            <tr>
              <td>Desenvolvimento de Website</td>
              <td className="withdraw">RS 12.000,00</td>
              <td>Desenvolvimento</td>
              <td>19/10/1998</td>
            </tr>
            <tr>
              <td>Desenvolvimento de Website</td>
              <td className="deposit">RS 12.000,00</td>
              <td>Desenvolvimento</td>
              <td>19/10/1998</td>
            </tr>
            <tr>
              <td>Desenvolvimento de Website</td>
              <td className="withdraw">RS 12.000,00</td>
              <td>Desenvolvimento</td>
              <td>19/10/1998</td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
