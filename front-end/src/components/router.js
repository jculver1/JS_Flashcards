import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './form'
import Delete from './delete'


const Index = () => <h2>Home</h2>;

const AddMethods = () => <h2>Add a new method:</h2>;

const AppRouter = (props) => (
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
          <li>
            <Link to="/delete/">Delete Method</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Index} />
      <Route path="/form/" 
         render={() => 
          <Form 
            newMethodName={props.newMethodName}
            newMethodDescription={props.newMethodDescription}
            postNewMethod = {props.postNewMethod}
            />} />  
      <Route path="/delete"
        render={()=>
        <Delete
         listOfMethods={props.listOfMethods.map(method => <option value={method.id}>{method.name}</option>)}
        />} />
    </div>
  </Router>
);

export default AppRouter;