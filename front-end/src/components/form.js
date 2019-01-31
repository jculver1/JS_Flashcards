import React from 'react';
import '../App.css';

const Form = (props) => {
  return (
<form>
    
  <div class="form-group">
    <label for="exampleInputEmail1">Method Name</label>
    <input placeholder="Enter method name" onChange={(event)=>props.newMethodName(event)}></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input onChange={(event)=> props.newMethodDescription(event)}></input>
  </div>
  <button type="submit" class="btn btn-primary" onClick={() => props.postNewMethod()}>Submit</button>
</form>
  )
}
export default Form