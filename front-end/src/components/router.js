import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Insert from './insert'

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
// const Insert = () => <h2>Insert</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/insert/">Insert</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/insert/" component={Insert} />
    </div>
  </Router>
);


export default AppRouter;
