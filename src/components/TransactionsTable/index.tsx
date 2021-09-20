import { Container } from "./styles";
import { Content } from "../../styles/content";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  transactionType: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data.transactions));
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
            { transactions.map(transaction => (
         

              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.transactionType}>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(transaction.amount)
                  }
                </td>
                <td>{transaction.category}</td>
                <td>
                {
                    new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
                  }
                </td>
              </tr>


            ) )}
         
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
