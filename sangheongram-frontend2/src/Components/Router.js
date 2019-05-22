import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

// 로그인이 되어있을때는 Feed 라우터 컴포넌트를 불러온다
const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);

// 로그인이 안되어있다면 Auth 라우터 컴포넌트를 불러온다
const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

// AppRouter에 isloggedIn을 프롭스 데이터를 전달해준다.
// isLoggedIn을 받았을때 True면 loggedInRoutes 보여주고, 아닐경우 loggedOutRoutes를 보여준다.
const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);

// AppRouter의 프롭타입 확인을 하는데 isLoggedIn은 bool 형식의 값만 받는다.
AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
