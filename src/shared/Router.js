import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Community from "../pages/Community";
import Register from "../pages/Register";
import Mypage from "../pages/MyPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getToken } from "../redux/modules/getToken";

const Router = () => {
  // const dispatch = useDispatch();
  // const token = localStorage.getItem("Token");
  // const sendToken = useSelector((state) => state.getToken);

  // useEffect(() => {
  //   dispatch(getToken(token));
  // }, []);

  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/detail/" element={<Detail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Layout >
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
