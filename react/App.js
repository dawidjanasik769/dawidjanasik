

import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {
    text: "Wpisz datę",
    error: " "
  }

  handleDateChange = () => {
    const value = this.refs.number.value;
    console.log(value);
    fetch('http://numbersapi.com/'+value+'/year?json')
      .then(res => {
        if(res.ok){
          return res
        }
        throw Error(res.status)
      })
      .then(res => res.json())
      .then(data => this.setState({
        text: data.text
      }))
      .catch(err => {
        this.setState({
          text: "Coś jest źle :( "+ err
        })
      })
  }

  render(){
    return (
      <div>
        <input onChange={this.handleDateChange} type="text" ref="number"></input>
        <p>{this.state.text}</p>

      </div>
    );
  }
}

export default App;

