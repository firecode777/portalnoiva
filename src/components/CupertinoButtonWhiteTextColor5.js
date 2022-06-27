import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonWhiteTextColor5(props) {
  return (
    <Container {...props}>
      <Contato>Contato</Contato>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
`;

const Contato = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonWhiteTextColor5;
