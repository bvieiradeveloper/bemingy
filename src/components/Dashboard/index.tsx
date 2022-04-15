import { Summary } from "../Symmarry";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./style";


export function Dashboard() {
  return(
    <Container>
      <Summary></Summary>
      <TransactionTable></TransactionTable>
    </Container>
  )
}