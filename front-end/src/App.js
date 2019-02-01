import React, { Component } from 'react';
import './App.css';
import Card from './components/card'
import Submit from './components/submit'
import Progress from './components/progress'
import AppRouter from './components/router'

class App extends Component {

constructor(props) {
  super(props)
  this.state = { 
  method: [],
  name: '',
  description: '',
  example: '',
  clicked: false,
  checkAnswer: true,
  percent: 0,
  newMethodName: '',
  newMethodDescription: '',
  newMethodList: [],
  id: 0
  }
}

serverName = 'http://localhost:3001/'

async componentDidMount(){
  fetch(this.serverName)
    .then(data => data.json())
    .then(JSONdata => {
      this.setState({
        method: JSONdata,
        originalCount: JSONdata.length
      })
    })
}

postNewMethod = () => {
  fetch(this.serverName, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: this.state.newMethodName,
      description: this.state.newMethodDescription,
    })
  })
}

getRandomMethod = (max) => {
  const min = 0
  max = this.state.method.length - 1
  return Math.floor(Math.random() * (max - min + 1)) + min 
}

percentDone = () => {
  const percent = (1-(this.state.method.length / this.state.originalCount)) * 100 
  this.setState({
    percent: Math.round(percent)
  })
  console.log(this.state.percent)
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
  this.percentDone()
}

checkIfCorrect = (event) => {
  const newMethodList = this.state.method.filter(method => method.name !== this.state.name)
  if(event.target.value === 'Yes'){ 
     this.setState({
       method: newMethodList
     }) 
    }
  }

  newMethodName = (event) => {
    this.setState({
      newMethodName: event.target.value 
    })
  }

  newMethodDescription = (event) => {
    this.setState({
      newMethodDescription: event.target.value 
    })
  }

  // deleteMethod = (event) => {
  //   const newList = this.state.method.map(method => {
  //     if(method.id !== event.target.value)
  //     return method 
  //   }) 
  //   this.setState({
  //     newMethodList: newList
  //   })
  //   console.log(newList) 
  //   console.log(event.target.value)
  // }

  selectToDelete = (event) => {
    const newList = this.state.method.filter(method => `${method.id}` !== event.target.value)
    this.setState({
      method: newList,
      id: event.target.value
    })
  }

 deleteMethod = () => {
    fetch(`${this.serverName}${this.state.id}`, {
      method: 'DELETE'
    }).then(console.log('yep'))
    .catch('nope')
  }


  // deleteMethod = () => {
  //   this.setState({
  //     method: this.state.newMethodList
  //   })
  //   console.log(this.state.method)
  // }

  

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
        <AppRouter newMethodName={this.newMethodName}  newMethodDescription={this.newMethodDescription} postNewMethod ={this.postNewMethod} listOfMethods={this.state.method} selectToDelete={this.selectToDelete} deleteMethod={this.deleteMethod}/>
        </div>
        <div class="col-6">
         <Card emptyList = {this.state.method} addMethod = {this.addMethod} description={this.state.description} clicked={this.state.clicked} name={this.state.name} checkAnswer={this.state.checkAnswer} originalCount={this.originalCount} methodLength={this.method}/>
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
          <Progress percent={this.state.percent}/>
         </div>
         <div class="col-3">
         </div>
        </div>
        </div>
        
    );
  }
}

export default App