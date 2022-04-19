import Modal from "react-modal";
import { Container,TransactionTypeContainer, RadioButton } from "./style";
import closeImage from "../../assets/close.svg";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionOpenModalProps{
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionOpenModal ({isOpen, onRequestClose}: NewTransactionOpenModalProps) {
  
  const [type, setType] = useState('deposit');

  return (
    <>
      <Modal 
        isOpen = {isOpen}
        onRequestClose={onRequestClose}
        overlayClassName = "react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" className="react-modal-close">
          <img src={closeImage} onClick={onRequestClose} alt="Fechar Modal" />
        </button>
        <Container>
        <h2>Cadastra Transação</h2>

        <input type="text" 
               placeholder="Título"/>
        <input type="number"
               placeholder="Valor" />
        <TransactionTypeContainer>
          <RadioButton 
            type="button"
            onClick={() => { setType('deposit')}}
            isActive = { type === 'deposit'}
            activeColor = {'green'}
          >
              <img src={incomeImage} alt="Entrada" />
              <span>Entrada</span>
          </RadioButton>
          <RadioButton 
            type="button"
            onClick={() => { setType('withdraw')}}
            isActive = { type === 'withdraw'}
            activeColor = {'red'}
          >
            <img src={outcomeImage} alt="Saída" />
            <span>Saída</span>
          </RadioButton>
          </TransactionTypeContainer>
        <input type="text"
               placeholder="Categoria"/>
        <button type="submit">Cadastrar Transação</button>
        </Container>
      </Modal>
    </>
  );
} 