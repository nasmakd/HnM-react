//nav에 authenticate, setAuthenticate 전달 해줘서  로그인, 아웃이 표시되게
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./route/PrivateRoute";
/*
  1. 전체 상품 페이지(대문 페이지), 로그인, 상품 상세 페이지
  1-1. 네비게이션 바
  2. 전체 상품 페이지(대문 페이지) - 전체 상품을 쭉 나열
  2-1 대문 상품 페이지를 클릭하면 디테일 페이지가 보이게
  3. 상품 검색기능
  4. 로그인 버튼 클릭하면 - 로그인 페이지 나옴
  5. 로그인, 로그아웃 버튼은 토글 버튼
  6. 상품 썸네일을 클릭 - 로그인이 안되어 있을때는 로그인 페이지가 나옴
  7. 로그인이 되어 있을 때는 상품 디테일 페이지를 볼 수 있음
  8. 로그아웃기능 - 로그ㅏ웃 상태에선 다시 디테일 페이지 X, 로그인 페이지가 나옴
  9.반응형, 사이드 바
*/ 
function App() {
  const [authenticate, setAuthenticate] = useState(false); 
  //로그인 상태 구분 (처음엔 로그인 안된 상태)

  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='product/:id' element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </>
  )
}

export default App;

// Routes는 Route를 감싸주고, 스위치 해주는 역할

