import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonBlackTextColor(props) {
  return (
    <Container {...props}>
      <GuiaEmpresa>Guia Empresa</GuiaEmpresa>
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

const GuiaEmpresa = styled.span`
  font-family: Roboto;
  color: #000;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonBlackTextColor;
