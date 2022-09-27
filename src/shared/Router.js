import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Community from "../pages/Community";
import CommunityDetail from "../pages/CommunityDetail";
import Register from "../pages/Register";
import Mypage from "../pages/MyPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Rank from "../pages/Rank";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:postid" element={<CommunityDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/rank" element={<Rank />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
