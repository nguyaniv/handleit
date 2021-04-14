import React from "react";
import Navbar from "./cmps/Navbar";
import Home from './pages/home/Home';
import AdhdPage from './pages/adhd/AdhdPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Asd from './pages/asd/Asd';
// import { Counter } from './features/counter/Counter';
function App() {
  return (
    <div className="app-container">
      <div className="max-width">
        <Router>
        <Navbar />
        
        <Switch>
          <Route path={"/adhd"} component={AdhdPage} />
          <Route path={"/asd"} component={Asd} />
          <Route path={"/"} component={Home} />
        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
