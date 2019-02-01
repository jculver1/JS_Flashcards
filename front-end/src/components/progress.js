import React from 'react';
import '../App.css';


const Progress = (props) => {
return(

<div class="progress mt-5">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar"  aria-valuenow= {props.percent} aria-valuemin="0" style={{width: `${props.percent}%`}}aria-valuemax="100"></div>
</div>

)}

export default Progress

//need to add style = width: 50%

// {{width: `${props.percentDone}%` }}