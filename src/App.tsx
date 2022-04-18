import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";

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
    <>
      <Header onTransactionOpenModal = {handleTransactionOPenModal}/>
      <Dashboard/>
      <Modal 
      isOpen = {transactionOpenModal}
      onRequestClose={handleTransactionCloseModal}
      >
        <h1>React Modal</h1>
      </Modal>
      <GlobalStyle/>
    </>
  );
}