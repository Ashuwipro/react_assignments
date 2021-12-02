import React from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Headings from "./components/Headings";
import About from "./components/About";
import Songs from "./components/Songs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Info />
        <hr />
        <Headings />
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/songs">
            <Songs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
