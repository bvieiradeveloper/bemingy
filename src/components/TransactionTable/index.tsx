import { useEffect, useState } from "react";
import { Container } from "./style"
import {api} from "../../services/Api"


interface Transactions{
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string
}


export function TransactionTable (){

  const [transactions, setTransactions] = useState<Transactions[]>([]);
  
  useEffect(()=>{
    api.get("/transactions").then(response => setTransactions(response.data.transactions))
  },[]);

  return(
    <Container>
      <table>
        <thead>
          <tr>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
             <><tr>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR",{
                  style: "currency",
                  currency: "BRL"
                }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td> {new Intl.DateTimeFormat("pt-BR").format(new Date(transaction.createdAt))}</td>
            </tr></>
          ))}
         
        </tbody>

      </table>

      
    </Container>
  );
}