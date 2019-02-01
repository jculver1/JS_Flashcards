import React from 'react';
import '../App.css';

const Card = (props) => {
  return (
<div class="card text-center">
  <div class="card-header">
  {props.methodLength === 0 ? 'Whoop!' : props.answerClicked ? props.name : '' }
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.methodLength === 0 ? 'All done!' : props.description}</h5>
    <p class="card-text"></p>
  </div>
  <div class="card-footer text-muted">
  <a onClick = {props.addMethod} href="#" class="btn btn-primary">Next Question</a>
  <a onClick = {props.showAnser} href="#" class="btn btn-primary">Show Answer</a>
   <a onClick = {props.edit} href="#" class="btn btn-primary">Edit</a>
  </div>
</div>
  )
}
export default Card