import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonWhiteTextColor4(props) {
  return (
    <Container {...props}>
      <Materias>Materias</Materias>
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

const Materias = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonWhiteTextColor4;
