import React, { Component } from 'react';
import './App.css';
import Card from './components/card'
import Submit from './components/submit'
import AppRouter from './components/router'

class App extends Component {

constructor(props) {
  super(props)
  this.state = { 
  method: [],
  name: '',
  description: '',
  id: 0,
  example: '',
  clicked: false,
  checkAnswer: true,
  percent: 0,
  newMethodName: '',
  newMethodDescription: '',
  newMethodList: [],
  answerClicked: false,
  edit: false
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

changeMethod = () => {
  console.log('put it', this.state.id)
  fetch(`${this.serverName}${this.state.id}`, {
    method: 'PUT',
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
}

addMethod = () => {
  const randIndex = this.getRandomMethod(this.state.method.length - 1)
  const randomMethod = this.state.method[randIndex]
  if(this.state.method.length > 0){
    this.setState({
      name: randomMethod.name,
      description: randomMethod.description,
      id : randomMethod.id,
      example: randomMethod.example,
      clicked: !this.state.clicked,
      checkAnswer: !this.state.clicked,
      answerClicked: false
    })
  }
  this.percentDone()
}

showAnser = () => {
  console.log('clicked')
  this.setState({
    answerClicked: true
  })
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
    console.log(event.target.value)
    this.setState({
      newMethodName: event.target.value 
    })
  }

  newMethodDescription = (event) => {
    console.log(event.target.value)
    this.setState({
      newMethodDescription: event.target.value 
    })
  }

  selectToDelete = (event) => {
    const newList = this.state.method.filter(method => `${method.id}` !== event.target.value)

    this.setState({
      newMethodList: newList,
      id: event.target.value
    })
  }

 deleteMethod = () => {
    fetch(`${this.serverName}${this.state.id}`, {
      method: 'DELETE'
    }).then(
    this.setState({
      method: this.state.newMethodList
    })
    )
    .catch('nope')
  }

  editCard = () => {
    console.log('edit button')
    this.setState({
      edit: !this.state.edit
    })
  }
  

  render() {
    return (
      <div class="container">
        <div class="row mb-5"> 
        <div class="col-4"></div>
         <div class='col-6'></div>
         <div class="col-2"></div>
       </div>
       <div class="row">
        <div class="col-4">
          <AppRouter newMethodName={this.newMethodName} newMethodDescription={this.newMethodDescription} postNewMethod ={this.postNewMethod} listOfMethods={this.state.method} selectToDelete={this.selectToDelete} deleteMethod={this.deleteMethod} percent={this.state.percent}/>
          </div>
        <div class="col-6">
         <Card emptyList = {this.state.method} addMethod = {this.addMethod} description={this.state.description} clicked={this.state.clicked} name={this.state.name} checkAnswer={this.state.checkAnswer} originalCount={this.originalCount} methodLength={this.state.method.length} showAnser={this.showAnser} answerClicked={this.state.answerClicked} edit={this.state.edit} editCard={this.editCard} newMethodName={this.newMethodName} newMethodDescription={this.newMethodDescription} changeMethod={this.changeMethod}/>
         </div>
        </div>
        <div class="col-2"></div>
      <div class="row pt-5">
        <div class="col-4"></div>
        <div class="col-6">{this.state.answerClicked ? <Submit checkIfCorrect={this.checkIfCorrect}/> : ''}</div> 
        <div class="col-2"></div>
      </div>
      <div class="row pt-5">
        <div class="col-4"></div>
         <div class="col-6"></div>
         <div class="col-2"></div>
      </div>
    </div>
    );
  }
}

export default App