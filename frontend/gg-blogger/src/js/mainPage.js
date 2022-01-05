import React, { Component } from 'react';
import { Button, Grid, Input, Row, Col } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import PostCard from './postCard.js'
import { getAllPost } from './api/postApi'

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

const recentPost = (posts) => {
    let postList = [];
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        postList.push(<PostCard title={post['title']} author={post['account']} content={post['content']} />)
    }

    return (
        <ul>
            {postList}
        </ul>
    )
};

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_data: []
        };
    }

    componentDidMount() {
        getAllPost()
            .then(res => {
                this.setState({
                    post_data: Object.values(res.data['posts'])
                })
            }
        )
    }

    render() {
        return(
            <Grid fluid>
                {searchArea}
                <div style={{ marginBottom: "5em" }}></div>
                {recentPost(this.state.post_data)}
            </Grid>
        )
    }
}

export default MainPage;
