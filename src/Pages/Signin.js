import React from "react";
import styled from "styled-components";
import { AccountBox } from "../component/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 2%;
  flex-direction: column;
  align-items: center;
  background: #d3ccd8;
  justify-content: center;
`;
function Signin() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default Signin;
