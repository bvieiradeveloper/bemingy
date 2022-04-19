import Modal from "react-modal";
import { Container,TransactionTypeContainer } from "./style";
import closeImage from "../../assets/close.svg";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";

interface NewTransactionOpenModalProps{
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionOpenModal ({isOpen, onRequestClose}: NewTransactionOpenModalProps) {
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
          <button type="button">
              <img src={incomeImage} alt="Entrada" />
              <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImage} alt="Saída" />
            <span>Saída</span>
          </button>
          </TransactionTypeContainer>
        <input type="text"
               placeholder="Categoria"/>
        <button type="submit">Cadastrar Transação</button>
        </Container>
      </Modal>
    </>
  );
} 