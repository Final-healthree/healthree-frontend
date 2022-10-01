import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Community from "../pages/Community";
import CommunityDetail from "../pages/CommunityDetail";
import Register from "../pages/Register";
import Mypage from "../pages/MyPage";
<<<<<<< HEAD
import Pullpage from "../components/layout/Pullpage";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
=======
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Rank from "../pages/Rank";
import Setting from "../pages/Setting";
>>>>>>> 4c1780ef34e71d9948edd4b90283116e7dd3b7ec

const Router = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Pullpage>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/:postid" element={<CommunityDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
          <Footer />
        </Layout>
      </Pullpage>
=======
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:postid" element={<CommunityDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        <Footer />
      </Layout>
>>>>>>> 4c1780ef34e71d9948edd4b90283116e7dd3b7ec
    </BrowserRouter>
  );
};

export default Router;
