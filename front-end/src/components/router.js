import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './form'
import Delete from './delete'
// import Progress from './progress'
import Card from './card'

const AppRouter = (props) => (
  <Router>
<div>
<div>
    <nav className="navbar navbar-expand-lg navbar-light  bg-light">
      <Link className="navbar-brand" to="/home">Flash Cards</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/add">Add Method</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/delete/:id/">Delete Method</Link>
        </li>
      </ul>
    </nav>
  </div>
      <Route path="/home" 
      render={() => 
        <Card
          emptyList={props.emptyList} addMethod={props.addMethod} description={props.description} clicked={props.clicked} name={props.name} checkAnswer={props.checkAnswer} originalCount={props.originalCount} methodLength={props.methodLength} showAnser={props.showAnser} answerClicked={props.answerClicked} edit={props.edit} editCard={props.editCard} newMethodName={props.newMethodName} newMethodDescription={props.newMethodDescription} changeMethod={props.changeMethod}
        />}
      />
      <Route path="/add/" 
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