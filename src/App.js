import React from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {


  if (window.location.pathname !== '/') {
    if (window.location.pathname !== '/login') {
      if (window.location.pathname !== '/signup') {
        if (window.location.pathname !== '/dashboard') {
          window.location.assign('/')
        }
      }
    }
  }
  return (
    <Router>
      <div className="wrapper">  
        <Route path="/" exact component={LogIn} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
