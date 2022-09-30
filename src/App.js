import React from "react";
import Router from "./shared/Router";
import './App.css';
import GlobalStyle from "./shared/GlobalStyle";
import Web from "./components/Layout/Web"

function App() {
  return (
    <div>
      {/* <Web> */}
        <GlobalStyle />
        <Router />
      {/* </Web> */}
    </div>
  );
}

export default App; 
