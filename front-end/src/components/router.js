import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './form'
import Delete from './delete'
import Progress from './progress'

const Index = () => <h2>Home</h2>;

const AppRouter = (props) => (
  <Router>
    <div>
      <div class='row mb-5'>
      <nav>
        <ul>
          <li>
            <Link to="/progress">Progress</Link>
          </li>
          <li>
            <Link to="/form/">Add Method</Link>
          </li>
          <li>
            <Link to="/delete/:id/">Delete Method</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Route path="/progress" 
      render={() => 
        <Progress percent={props.percent}
        />}
      />
      <Route path="/form/" 
         render={() => 
          <Form 
            newMethodName={props.newMethodName}
            newMethodDescription={props.newMethodDescription}
            postNewMethod = {props.postNewMethod}
            />} 
            />  
      <Route path="/delete/:id"
        render={() =>
        <Delete
         listOfMethods={props.listOfMethods.map(method => <option value={method.id}>{method.name}</option>)}
         selectToDelete={props.selectToDelete}  
         deleteMethod ={props.deleteMethod}
        />} 
        />
    </div>
  </Router>
);

export default AppRouter;