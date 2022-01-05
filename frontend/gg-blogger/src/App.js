import React, { Component } from 'react'
import './css/App.css';
import { Container, Header, Sidebar, Content } from 'rsuite';
import Myheader from './js/myheader.js'
import MainPage from './js/mainPage.js';
import QueryBar from './js/queryBar.js';

class App extends Component {
  render() {
    return(
      <div>
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
