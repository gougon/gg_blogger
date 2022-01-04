import React, { Component } from 'react'
import './css/App.css';
import { Container, Header, Sidebar, Content } from 'rsuite';
import Myheader from './js/myheader.js'
import MainPage from './js/mainPage.js';
import QueryBar from './js/queryBar.js';

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
        <Container style={{ flexDirection: "column" }}>
          <Header>
            <Myheader />
          </Header>
          <Container>
            <Sidebar style={{ margin: "1% 5% 5% 0%" }}>
              <QueryBar />
            </Sidebar>
            <Content style={{ margin: "5% 20% 5% 0%" }}>
              <MainPage />
            </Content>
          </Container>
        </Container>
      </div>
    )
  }
}

export default App;
