import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonWhiteTextColor8(props) {
  return (
    <Container {...props}>
      <AnuncieAqui>Anuncie Aqui</AnuncieAqui>
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

const AnuncieAqui = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonWhiteTextColor8;
