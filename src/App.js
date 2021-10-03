import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BillList from "./components/BillList";
import UserInfo from "./components/UserInfo";
import BillCreate from "./components/BillCreate";
import Footer from "./components/Footer";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Switch>
              <Route path="/userInfo">
                <UserInfo />
              </Route>
              <Route path="/billlist">
                <BillList />
              </Route>
              <Route path="/billcreate">
                <BillCreate />
              </Route>
              <Route exact path="/home">
                <Header />

                <Banner />

                <Content title="Bill Payment" />
                <Footer />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
