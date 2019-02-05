import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "./store/context";
import { Home } from "./containerComponents/Home";
import "semantic-ui-css/semantic.min.css";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Provider>
        <Route exact path="/" component={Home} />
      </Provider>
    </Router>
  );
};

export default App;
