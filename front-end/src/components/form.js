import React from 'react';
import '../App.css';

const Form = (props) => {
  return (
<form>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Method Name</label>
    <textarea class="form-control mb-2" id="exampleFormControlTextarea1" onChange={(event)=>props.newMethodName(event)}></textarea>
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control mb-2" id="exampleFormControlTextarea1" onChange={(event)=>props.newMethodDescription(event)}></textarea>
  <button type="submit" class="btn btn-primary" onClick={() => props.postNewMethod()}>Submit</button>
  </div>
</form>
  )
}
export default Form