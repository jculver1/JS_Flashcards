import React from 'react';
import '../App.css';

const Submit = (props) => {
return(
<div>
    <h2 class='text-center'>Did you answer correctly?</h2>
<select onChange={(event)=>props.checkIfCorrect(event)} class="form-control form-control-lg">
  <option>Select one</option>
  <option>Yes</option>
  <option>No</option>
</select>
</div>
)}

export default Submit