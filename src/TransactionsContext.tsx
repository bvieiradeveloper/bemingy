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

interface TransactionsContextData{
  transactions: Transactions[],
  createTransaction: (Transactions: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

interface TransactionsProviderProps {
  children : ReactNode;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>;

export function TransactionProvider({ children }: TransactionsProviderProps){

  const [transactions, setTransactions] = useState<Transactions[]>([]);
  
  useEffect(()=>{
    api.get("/transactions").then(response => setTransactions(response.data.transactions))
  },[]);


  function createTransaction(transaction: TransactionInput){
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      { children }
    </TransactionsContext.Provider>
  );
}