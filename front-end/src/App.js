import React, { Component } from 'react';
import './App.css';
import Card from './components/card'
import Submit from './components/submit'
import Progress from './components/progress'
// import AppRouter from './components/router'

class App extends Component {

constructor(props) {
  super(props)
  this.state = { 
  method: [],
  name: '',
  description: '',
  example: '',
  clicked: false,
  checkAnswer: true
  }
}

componentDidMount(){
  fetch('http://localhost:3001/')
    .then(data => data.json())
    .then(JSONdata => {
      this.setState({
        method: JSONdata,
        originalCount: JSONdata.length
      })
    })
}

getRandomMethod = (max) => {
  const min = 0
  max = this.state.method.length - 1
  return Math.floor(Math.random() * (max - min + 1)) + min 
}

addMethod = () => {
  const randIndex = this.getRandomMethod(this.state.method.length - 1)
  const randomMethod = this.state.method[randIndex]
  if(this.state.method.length > 0){
    this.setState({
      name: randomMethod.name,
      description: randomMethod.description,
      example: randomMethod.example,
      clicked: !this.state.clicked,
      checkAnswer: !this.state.clicked
    })
  }
}

checkIfCorrect = (event) => {
  console.log(event.target.value)
  const findname = this.state.method.map(method => method.name)
  const equals = (element) => element === this.state.name 
 
  const findIndex = findname.findIndex(equals)
  const newMethodList = this.state.method.splice(findIndex, 1)
  if(event.target.value === 'Yes'){ 
     this.setState({
       method: newMethodList
     }) 
    }
    console.log(newMethodList)
  }

percentDone = () => {
  const percent = (this.state.method.length / this.state.originalCount) * 100 
  return percent
}


  render() {
    return (
      <div class="container">
        <div class="row"> 
        <div class="col-3">
        </div>
         <div class='col-6'> 
         </div>
         <div class="col-3">
        </div>
       </div>
       <div class="row">
        <div class="col-3">
        {/* <AppRouter/> */}
        </div>
        <div class="col-6">
         <Card emptyList = {this.state.method} addMethod = {this.addMethod} description={this.state.description} clicked={this.state.clicked} name={this.state.name} checkAnswer={this.state.checkAnswer}/>
         </div>
        </div>
        <div class="col-3">
         </div>
         <div class="row pt-5">
         <div class="col-3">
        </div>
        <div class="col-6">{!this.state.checkAnswer ? <Submit checkIfCorrect={this.checkIfCorrect}/> : ''}
        </div> 
         <div class="col-3">
        </div>
         </div>
        <div class="row pt-5">
        <div class="col-3">
         </div>
         <div class="col-6">
          <Progress percentDone={this.percentDone}/>
         </div>
         <div class="col-3">
         </div>
        </div>
        </div>
        
    );
  }
}

export default App