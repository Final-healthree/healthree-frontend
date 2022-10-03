import React from "react";
import Router from "./shared/Router";
import './App.css';
import GlobalStyle from "./shared/GlobalStyle";
import { BrowserView, MobileView } from "react-device-detect";
import MobileLayout from "./components/layout/MobileLayout";

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserView>
      <Router />
    </BrowserView>
    <MobileView>
      <MobileLayout />
      <Router />
    </MobileView>
    </>
  );
}

export default App; 
