import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import Footer from "./Footer";
// isloggedIn을 받아오는 쿼리문
const Query = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

// 테마는 Theme.js에 정의해놓은 대로 실행할 것.
// GlobalStyles 컴포넌트로 전체적인 전역 스타일 적용
// AppRouter의 isLoggedIn을 props data로 전달 받음
export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(Query);

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <Router isLoggedIn={isLoggedIn} />
        <Footer />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </Wrapper>
    </ThemeProvider>
  );
};
