import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './form'
import Delete from './delete'
import Progress from './progress'
import Card from './card'

const AppRouter = (props) => (
  <Router>
<div>
<div class ='row routContainer'>
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
  <div class ='row mt-5 cardContainer'>
      <Route path="/home" 
      render={() => 
        <div>
        <Card
          emptyList={props.emptyList} addMethod={props.addMethod} description={props.description} clicked={props.clicked} name={props.name} checkAnswer={props.checkAnswer} originalCount={props.originalCount} methodLength={props.methodLength} showAnser={props.showAnser} answerClicked={props.answerClicked} edit={props.edit} editCard={props.editCard} newMethodName={props.newMethodName} newMethodDescription={props.newMethodDescription} changeMethod={props.changeMethod} changeFirstButton={props.changeFirstButton}
        />
        <Progress percent={props.percent}/>
        </div>
      }/>
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
    </div>
  </Router>
);

export default AppRouter;