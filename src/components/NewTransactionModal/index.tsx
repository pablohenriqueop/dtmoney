import Modal from "react-modal";
import { Container, RadioBox } from "./styles";

import close from '../../assets/close.svg';
import arrowUp from "../../assets/income.svg";
import arrowDown from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [transactionType, setTransactionType] = useState("deposit");

    Modal.setAppElement('#root');




    function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault();
      const data = {
        title,
        amount,
        category,
        transactionType
      };
      
      api.post('/transactions', data);
    }

  return (
    <Modal isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button className="react-modal-close" onClick={onRequestClose}>
        <img src={close} alt="Fechar modal" />
      </button>
     <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar Transação</h2>
      <input 
      placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />

      <input type="number" placeholder="Valor" value={amount}  onChange={(e) => setAmount(Number(e.target.value))} />

      <input 
      placeholder="Categoria" value={category}  onChange={(e) => setCategory(e.target.value)} />

      <div className="transaction-type">
        <RadioBox type="button" onClick={() => {setTransactionType("deposit")}} isActive={transactionType === 'deposit'} activeColor="green">
          <img src={arrowUp} alt="Entrada" width="24px"
          />
          Entrada
        </RadioBox>
        <RadioBox type="button" onClick={() => {setTransactionType("withdraw")}} isActive={transactionType === 'withdraw'} activeColor="red">
         <img src={arrowDown} alt="Saída" width="24px" />
          Saída
        </RadioBox>
      </div>

      <button type="submit">Cadastrar</button>
  
     </Container>

    </Modal>
  );
}
