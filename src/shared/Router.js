import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Community from "../pages/Community";
import Register from "../pages/Register";
import Mypage from "../pages/MyPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
