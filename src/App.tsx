import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionOpenModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./TransactionsContext";

Modal.setAppElement('#root'); 

export function App() {
  
  const [transactionOpenModal, setTransactionOpenModal] = useState(false);
  
  function handleTransactionOPenModal()
  {
     setTransactionOpenModal(true);
  }

  function handleTransactionCloseModal(){
    setTransactionOpenModal(false);
  }
  return (
    <TransactionProvider>
      <Header onTransactionOpenModal = {handleTransactionOPenModal}/>
      <Dashboard/>
      <NewTransactionOpenModal 
        isOpen = {transactionOpenModal}
        onRequestClose = {handleTransactionCloseModal}
      />
      <GlobalStyle/>
    </TransactionProvider>
  );
}