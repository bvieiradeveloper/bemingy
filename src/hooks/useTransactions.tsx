import {createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/Api";

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
  createTransaction: (transactionInput: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

interface TransactionsProviderProps {
  children : ReactNode;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>;

export function TransactionProvider({ children }: TransactionsProviderProps){

  const [transactions, setTransactions] = useState<Transactions[]>([]);
  
  useEffect(()=>{
    api.get("/transactions").then(response => setTransactions(response.data.transactions))
  },[]);


  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
    const { transaction } = response.data;

    console.log(response.data);

    setTransactions([
      ...transactions,
      transaction,
    ])
    console.log(transactions);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      { children }
    </TransactionsContext.Provider>
  );
}

export function useTransactions (){ return useContext(TransactionsContext) };