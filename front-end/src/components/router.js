import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './form'
import { props } from "bluebird";

const Index = () => <h2>Home</h2>;

const AddMethods = () => <h2>Add a new method:</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form/">Add Method</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/form/" component={Form} />
    </div>
  </Router>
);

export default AppRouter;