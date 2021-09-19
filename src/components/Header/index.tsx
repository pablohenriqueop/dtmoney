import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <a href="/">
          <img src={logo} alt="dt money" width="170px" />
        </a>
        <div>
          <button type="button">Nova transação</button>
        </div>
      </Content>
    </Container>
  );
}
