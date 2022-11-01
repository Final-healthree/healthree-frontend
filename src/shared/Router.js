import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import DetailCommunity from "../pages/DetailCommunity";
import Community from "../pages/Community";
import Register from "../pages/Register";
import Mypage from "../pages/MyPage";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Setting from "../pages/Setting";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
           <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/community/:postid" element={<DetailCommunity/>} />
            <Route path="/community" element={<Community />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Layout>

    </BrowserRouter>
  );
};

export default Router;
