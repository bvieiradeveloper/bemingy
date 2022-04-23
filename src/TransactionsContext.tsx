import {createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/Api";

interface Transactions{
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string
}


export const TransactionsContext = createContext<Transactions[]>([]);

interface TransactionsProviderProps {
  children : ReactNode;
}


export function TransactionProvider({ children }: TransactionsProviderProps){

  const [transactions, setTransactions] = useState<Transactions[]>([]);
  
  useEffect(()=>{
    api.get("/transactions").then(response => setTransactions(response.data.transactions))
  },[]);

  return (
    <TransactionsContext.Provider value={transactions}>
      { children }
    </TransactionsContext.Provider>
  );
}