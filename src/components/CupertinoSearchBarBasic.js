import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function CupertinoSearchBarBasic(props) {
  return (
    <Container {...props}>
      <Rect>
        <MaterialCommunityIconsIcon
          name="magnify"
          style={{
            color: "#000",
            fontSize: 20,
            alignSelf: "center",
            paddingLeft: 5,
            paddingRight: 5
          }}
        ></MaterialCommunityIconsIcon>
      </Rect>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #CECED2;
  padding: 8px;
`;

const Rect = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  background-color: #EFEFF4;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default CupertinoSearchBarBasic;
