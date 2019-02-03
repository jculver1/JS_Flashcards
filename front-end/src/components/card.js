import React from 'react';
import '../App.css';

// inputText = () => {
//   <div class="input-group">
//     <div class="input-group-prepend">
//       <span class="input-group-text">With textarea</span>
//     </div>
//     <textarea class="form-control" aria-label={props.description}></textarea>
//   </div>
// }

{/* <input onChange={(event)=>props.newMethodDescription(event)} type={"text"}></input> */}

const Card = (props) => {
  return (
<div class="card text-center">
  <div class="card-header">
  {props.methodLength === 0 ? 'Whoop!' : props.edit && props.answerClicked ? 
  <input onChange={(event)=>props.newMethodName(event)} type={"text"}></input>
  //  <div class="input-group">
  //   <textarea onChange={(event)=>props.newMethodName(event)} type={"text"} class="form-control" aria-label="With textarea"/>
  //  </div> 
   : props.answerClicked ? props.name : ''}
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.methodLength === 0 ? 'All done!' : props.edit && props.answerClicked ? 
    <input onChange={(event)=>props.newMethodDescription(event)} type={"text"}></input>

  //     <div class="input-group">
  //       <textarea onChange={(event)=>props.newMethodDescription(event)} class="form-control" aria-label="With textarea"/></div>
       : props.description}</h5>
    <p class="card-text"></p>
  </div>
  <div class="card-footer text-muted">
  <a onClick = {props.addMethod} href="#" class="btn btn-primary">Next Question</a>
  <a onClick = {props.showAnser} href="#" class="btn btn-primary mx-1">Show Answer</a>
   <a onClick = {props.editCard} href="#" class="btn btn-primary mr-1">{props.edit ? 'Hide Edit' : 'Edit' }</a>
   {props.edit ? <a onClick = {props.changeMethod} href="#" class="btn btn-primary">Save Changes</a> : ''}
  </div>
</div>
  )
}
export default Card