import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./containerComponents/Home";
import "semantic-ui-css/semantic.min.css";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
};

export default App;
