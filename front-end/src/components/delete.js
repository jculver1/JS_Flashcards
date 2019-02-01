import React from 'react';
import '../App.css';

const Delete = (props) => {
  return (
    <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1" onChange={(event) => props.selectToDelete(event)}>
        {props.listOfMethods}
    </select>
    <button type="submit" class="btn btn-primary" onClick={props.deleteMethod}>Submit</button>
  </div>
  )
}
export default Delete