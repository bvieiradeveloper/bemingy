import Modal from "react-modal";
import { Container } from "./style";

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
        <Container>
        <h1>Cadastra Transação</h1>

        <input type="text" 
               placeholder="Título"/>
        <input type="number"
               placeholder="Valor" />
        <input type="text"
               placeholder="Categoria"/>
        <button type="submit">Cadastrar Transação</button>
        </Container>
      </Modal>
    </>
  );
} 