import { useEffect } from "react";
import { Container } from "./style"
export function TransactionTable (){

  useEffect(()=>{
    fetch("http://localhost:3000/api/transactions").then(response => {
    console.log(response)  
    return response.json();
      
    }).then(data => 
     console.log(data) );
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>15/04/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$2.000</td>
            <td>Moradia</td>
            <td>16/04/2022</td>
          </tr>
        </tbody>

      </table>

      
    </Container>
  );
}