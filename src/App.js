import React from "react";
import Router from "./shared/Router";
import './App.css';
import GlobalStyle from "./shared/GlobalStyle";
import { BrowserView, MobileView } from "react-device-detect";
import MobileLayout from "./components/layout/MobileLayout";
import Pullpage from "./components/layout/Pullpage";

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserView>
      <Pullpage>
        <Router />
      </Pullpage>
    </BrowserView>
    <MobileView>
      <MobileLayout>
        <Router />
      </MobileLayout>
    </MobileView>
    </>
  );
}

export default App; 
