import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoButtonWhiteTextColor1 from "../components/CupertinoButtonWhiteTextColor1";
import CupertinoButtonWhiteTextColor2 from "../components/CupertinoButtonWhiteTextColor2";
import CupertinoButtonWhiteTextColor4 from "../components/CupertinoButtonWhiteTextColor4";
import CupertinoButtonWhiteTextColor5 from "../components/CupertinoButtonWhiteTextColor5";
import CupertinoButtonWhiteTextColor6 from "../components/CupertinoButtonWhiteTextColor6";
import CupertinoButtonWhiteTextColor7 from "../components/CupertinoButtonWhiteTextColor7";
import CupertinoButtonWhiteTextColor8 from "../components/CupertinoButtonWhiteTextColor8";
import CupertinoButtonWhiteTextColor9 from "../components/CupertinoButtonWhiteTextColor9";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";

function Untitled(props) {
  return (
    <Stack>
      <Rect>
        <CupertinoButtonWhiteTextColor1Row>
          <CupertinoButtonWhiteTextColor1
            style={{
              height: 44,
              width: 100
            }}
          ></CupertinoButtonWhiteTextColor1>
          <CupertinoButtonWhiteTextColor2
            style={{
              height: 44,
              width: 150,
              marginLeft: 22
            }}
          ></CupertinoButtonWhiteTextColor2>
          <CupertinoButtonWhiteTextColor4
            style={{
              height: 44,
              width: 100,
              marginLeft: 12
            }}
          ></CupertinoButtonWhiteTextColor4>
          <CupertinoButtonWhiteTextColor5
            style={{
              height: 44,
              width: 100,
              marginLeft: 34
            }}
          ></CupertinoButtonWhiteTextColor5>
          <CupertinoButtonWhiteTextColor6
            style={{
              height: 44,
              width: 100,
              marginLeft: 37
            }}
          ></CupertinoButtonWhiteTextColor6>
          <CupertinoButtonWhiteTextColor7
            style={{
              height: 44,
              width: 100,
              marginLeft: 52
            }}
          ></CupertinoButtonWhiteTextColor7>
          <CupertinoButtonWhiteTextColor8
            style={{
              height: 44,
              width: 100,
              marginLeft: 36
            }}
          ></CupertinoButtonWhiteTextColor8>
          <CupertinoButtonWhiteTextColor9
            style={{
              height: 44,
              width: 100,
              marginLeft: 44
            }}
          ></CupertinoButtonWhiteTextColor9>
          <CupertinoSearchBarBasic
            style={{
              height: 35,
              width: 56,
              backgroundColor: "rgba(163,121,80,1)",
              marginLeft: 53,
              marginTop: 4
            }}
          ></CupertinoSearchBarBasic>
        </CupertinoButtonWhiteTextColor1Row>
      </Rect>
      <Image
        src={require("../assets/images/LOGOTIPO-PORTAL-NOIVAS-MARROM-COM-FUNDO-TRANSPARENTE-PNG.png")}
      ></Image>
      <Rect2></Rect2>
    </Stack>
  );
}

const Stack = styled.div`
  width: 2704px;
  height: 188px;
  margin-top: -24px;
  margin-left: -144px;
  position: relative;
  display: flex;
`;

const Rect = styled.div`
  top: 24px;
  left: 0px;
  width: 2560px;
  height: 164px;
  position: absolute;
  background-color: rgba(163,121,80,1);
  flex-direction: row;
  display: flex;
`;

const CupertinoButtonWhiteTextColor1Row = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 1071px;
  margin-left: 293px;
  margin-top: 117px;
`;

const Image = styled.img`
  top: 0px;
  width: 208px;
  height: 135px;
  position: absolute;
  left: 723px;
  object-fit: contain;
`;

const Rect2 = styled.div`
  top: 135px;
  left: 144px;
  width: 2560px;
  height: 2px;
  position: absolute;
  background-color: #E6E6E6;
  opacity: 0.56;
`;

export default Untitled;
