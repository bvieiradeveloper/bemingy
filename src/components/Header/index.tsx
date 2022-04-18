import { Container, Content} from "./style";
import logoImg from "../../assets/logo.svg"

interface HeaderProps{
  onTransactionOpenModal: () => void;
}
export function Header({onTransactionOpenModal}: HeaderProps) {
  return(
    <Container>
      <Content>
      <img src={logoImg} alt="be mingy"/>
      <button type="button" onClick={onTransactionOpenModal}>Nova Transação</button>
      </Content>
    </Container>
  )
}