import { Container } from "./styled";
import incomeImg from  "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
 
  const { transactions } = useTransactions();

  const summary =  transactions.reduce((acc, transaction) => {
    console.log(transaction.category);
    if(transaction.type === 'deposit'){
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    }else{
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  },{
    deposit: 0,
    withdraw: 0,
    total: 0
  })
console.log(summary)
  return(
    <Container>
      <div>
        <header>
        <p>Entrada</p>
        <img src={incomeImg} alt="Entrada" />
      </header>
      <strong>{new Intl.NumberFormat("pt-BR",{
                  style: "currency",
                  currency: "BRL"
                }).format(summary.deposit)}</strong>
      </div>
      <div>
      <header>
      <p>Saída</p>
      <img src={outcomeImg} alt="Saída" />
      </header>
      <strong>-{new Intl.NumberFormat("pt-BR",{
                  style: "currency",
                  currency: "BRL"
                }).format(summary.withdraw)}</strong>
      </div>
       <div className = "highlight-background">
      <header>
      <p>Total</p>
      <img src={totalImg} alt="Total" />
      </header>
      <strong>{new Intl.NumberFormat("pt-BR",{
                  style: "currency",
                  currency: "BRL"
                }).format(summary.total)}</strong>
       </div>
       </Container>
  )
}