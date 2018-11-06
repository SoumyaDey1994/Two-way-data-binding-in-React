import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name : "Soumya Kanta Dey",
      phone : "9876501234",
    }
  }

  changeValue(event){
    const newState = {...this.state};
    if(event.target.id === 'name'){
        const changedName = event.target.value;
        newState.name = changedName;
    }else if(event.target.id === 'phone'){
      const changedPhoneNo = event.target.value;
      newState.phone = changedPhoneNo;
    }
      this.setState(() => newState);
  }
  render() {
    return (
      <div className="App">
        <br/><br/>
        <label for="name">User Name :</label> {this.state.name}
        <br/><br/>
        <label for="phone">Contact :</label> {this.state.phone}
        <br/><br/>
        <br/><br/>
        <input type="text" id="name" placeholder={this.state.name} onChange={(event)=>this.changeValue(event)}/> 
        <br/><br/>
        <input type="number" id="phone" placeholder={this.state.phone} onChange={(event)=>this.changeValue(event)} />
      </div>
    );
  }
}

export default App;

