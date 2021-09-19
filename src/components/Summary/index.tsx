import React from "react";

import {
  Container,
  Box,
  BoxTitle,
  BoxTitleWrapper,
  BoxTitleIcon,
  Value,
} from "./styles";

import arrowUp from "../../assets/income.svg";
import arrowDown from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

import { Content } from "../../styles/content";

export const Summary = () => {
  return (
    <Content>
      <Container>
        <Box>
          <BoxTitleWrapper>
            <BoxTitle>Entradas</BoxTitle>
            <BoxTitleIcon width="32px" src={arrowUp} />
          </BoxTitleWrapper>
          <Value>
            <span>R$</span> 17.400,00
          </Value>
        </Box>
        <Box>
          <BoxTitleWrapper>
            <BoxTitle>Saídas</BoxTitle>
            <BoxTitleIcon width="32px" src={arrowDown} />
          </BoxTitleWrapper>
          <Value>
            <span>R$</span> 1.259,00
          </Value>
        </Box>
        <Box
          style={{
            background: "#33CC95",
            color: "#fff",
          }}
        >
          <BoxTitleWrapper>
            <BoxTitle>Total</BoxTitle>
            <BoxTitleIcon width="32px" src={total} />
          </BoxTitleWrapper>
          <Value>
            <span>R$</span> 16.141,00
          </Value>
        </Box>
      </Container>
    </Content>
  );
};
