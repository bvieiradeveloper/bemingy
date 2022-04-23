import Modal from "react-modal";
import { Container,TransactionTypeContainer, RadioButton } from "./style";
import closeImage from "../../assets/close.svg";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import { FormEvent, useContext, useState } from "react";
import { api } from "../../services/Api";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionOpenModalProps{
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionOpenModal ({isOpen, onRequestClose}: NewTransactionOpenModalProps) {
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');
  const { createTransaction } = useContext(TransactionsContext);
  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    createTransaction({
      title,
      amount,
      type,
      category
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    
    onRequestClose();
  }
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
        <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastra Transação</h2>

        <input type="text" 
               placeholder="Título"
               onChange={(event) => {setTitle(event.target.value)} } />
        <input type="number"
               placeholder="Valor"
               value={amount}
               onChange={(event) => {setAmount(Number(event.target.value))} } />
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
               placeholder="Categoria"
               value={category}
               onChange={(event) => {setCategory(event.target.value)} } />
        <button type="submit">Cadastrar Transação</button>
        </Container>
      </Modal>
    </>
  );
} 