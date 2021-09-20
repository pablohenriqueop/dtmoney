import { Container } from "./styles";
import { Content } from "../../styles/content";
import { useEffect } from "react";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);
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
