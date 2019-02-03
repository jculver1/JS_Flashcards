import React from 'react';
import '../App.css';

const Card = (props) => {
  return (
<div class="card text-center cardContainer">
  <div class="card-header">
    {props.methodLength === 0 ? 'Whoop!' : props.edit && props.answerClicked ? 
    <div class="input-group">
      <textarea class="form-control" aria-label="With textarea" onChange={(event)=>props.newMethodName(event)}/>
    </div> : props.answerClicked ? props.name : ''}
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.methodLength === 0 ? 'All done!' : props.edit && props.answerClicked ? 
      <div class="input-group">
        <textarea class="form-control" aria-label="With textarea" onChange={(event)=>props.newMethodDescription(event)}/></div> : props.description}</h5>
    <p class="card-text"></p>
  </div>
  <div class="card-footer text-muted">
    <a onClick = {props.addMethod} href="#" class="btn btn-primary"> {props.changeFirstButton ? "Next Question" : "Let's get started!"}</a>
    <a onClick = {props.showAnser} href="#" class="btn btn-success mx-1">Show Answer</a>
    <a onClick = {props.editCard} href="#" class="btn btn-danger mr-1">{props.edit ? 'Hide Edit' : 'Edit' }</a>
      {props.edit ? <a onClick = {props.changeMethod} href="#" class="btn btn-info">Save Changes</a> : ''}
  </div>
</div>
)
}
export default Card