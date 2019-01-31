import React from 'react';
import '../App.css';

const Form = (props) => {
  return (
<form>
    
  <div class="form-group">
    <label for="exampleInputEmail1">Method Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter method name" onChange={(event)=>props.newMethodName(event)}></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Add method description" onChange={(event)=> props.newMethodDescription(event)}></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
}
export default Form