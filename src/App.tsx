import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh; /* Use viewport height to make the container fill the screen */
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  justify-content: flex-start; /* Align content to the top */
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
