import React, { Component } from 'react';
import { Button, Grid, Input, Row, Col } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import PostCard from './postCard.js'

const searchArea = (
    <Row>
        <Col xs={21}>
            <Input placeholder="Search . . ." />
        </Col>
        <Col xs={1} />
        <Col xs={2}>
            <Button appearance="ghost" style={{width: "100%", fontSize: "1.2em"}}>搜尋</Button>
        </Col>
    </Row>
);

const recentPost = (
    <PostCard />
);

class MainPage extends Component {
  render() {
    return(
        <Grid fluid>
            {searchArea}
            <div style={{ marginBottom: "5em" }}></div>
            {recentPost}
        </Grid>
    )
  }
}

export default MainPage;
