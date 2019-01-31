import React from 'react';
import '../App.css';

const Card = (props) => {
  return (
<div class="card text-center">
  <div class="card-header">
    JS Methods 
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.emptyList.length === 0 ? 'Whoop! You got them all!' :  props.clicked ? props.description : props.name}</h5>
    <p class="card-text"></p>
    <a onClick = {props.addMethod} href="#" class="btn btn-primary">{ props.clicked ? 'keep goin' : 'button' }</a>
  </div>
  <div class="card-footer text-muted">
    {/* {props.clicked ? '' : 'Did you guess right?'} */}
  </div>
</div>
  )
}
export default Card