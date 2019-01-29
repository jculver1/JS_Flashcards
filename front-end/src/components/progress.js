import React from 'react';
import '../App.css';



const Progress = (props) => {
return(
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar"  aria-valuenow="25" aria-valuemin="0" style={{width: props.percentDone}} aria-valuemax="100"></div>
</div>
)}

export default Progress

//need to add style = width: 50%