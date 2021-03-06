import React, { Component } from 'react';
import './App.css';
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
  changeFirstButton: false,
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

postNewMethod = async () => {
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

changeMethod = async () => {
  this.setState({
    edit: !this.state.edit
  })
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

changeButton = () => {
  this.setState({
    changeFirstButton: true
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
      answerClicked: false,
      changeFirstButton: true
    })
  }
}

showAnser = () => {
  this.setState({
    answerClicked: true
  })
}

checkIfCorrect = (event) => {
  const newMethodList = this.state.method.filter(method => method.name !== this.state.name)
  const findPercent = (1 - (newMethodList.length / this.state.originalCount)) * 100
  console.log(findPercent)
  if(event.target.value === 'Yes'){ 
     this.setState({
       method: newMethodList,
       percent: Math.round(findPercent)
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

 deleteMethod = async () => {
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
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    return (
      <div class="container">
        <div class="row"> 
          <div class="col-3"></div>
          <div class="col-6">
            <AppRouter newMethodName={this.newMethodName} newMethodDescription={this.newMethodDescription} postNewMethod ={this.postNewMethod} listOfMethods={this.state.method} selectToDelete={this.selectToDelete} deleteMethod={this.deleteMethod} percent={this.state.percent}
            emptyList = {this.state.method} addMethod = {this.addMethod} description={this.state.description} clicked={this.state.clicked} name={this.state.name} checkAnswer={this.state.checkAnswer} originalCount={this.originalCount} methodLength={this.state.method.length} showAnser={this.showAnser} answerClicked={this.state.answerClicked} edit={this.state.edit} editCard={this.editCard} changeMethod={this.changeMethod}
            changeFirstButton={this.state.changeFirstButton}
            />
          </div>
          <div class="col-3"></div>
          </div>
        <div class="row pt-5">
          <div class="col-3"></div>
          <div class="col-6">
            {this.state.answerClicked ? <Submit checkIfCorrect={this.checkIfCorrect} percentDone={this.percentDone}/> : ''}
          </div>
          <div class="col-3"></div>
        </div>
        <div class="row pt-5">
        </div>
      </div>
    );
  }
}
export default App