import React from 'react';
import '../App.css';

const Delete = (props) => {
  return (
    <form>
    <div class="form-group">
    <label for="exampleFormControlSelect1">Choose a Mthod to Delete</label>
    <select class="form-control mb-2" id="exampleFormControlSelect1" onChange={(event) => props.selectToDelete(event)}>
        {props.listOfMethods}
    </select>
    <button type="submit" class="btn btn-danger" onClick={props.deleteMethod}>Remove</button>
  </div>
  </form>
  )
}
export default Delete