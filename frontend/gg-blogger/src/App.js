import React, { Component } from 'react'
import './css/App.css';
import Header from './js/header.js'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.name = 'old name';
  //   this.state = {
  //     btnStatus: 0
  //   };
  //   this.changeName = this.changeName.bind(this);
  // }

  // changeName(newName) {
  //   this.name = newName;
  //   this.setState({
  //     btnStatus: 1
  //   });
  // }

  render() {
    return(
      <div>
        {/* <button onClick={() => this.changeName('newName')}>{this.name}</button> */}
        <Header/>
      </div>
    )
  }
}

export default App;