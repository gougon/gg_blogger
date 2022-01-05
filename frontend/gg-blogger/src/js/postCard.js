import React, { Component } from 'react';
import { Divider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const card = (title, author, content) => {
    console.log(title)
    console.log(author)
    console.log(content)
    return (
        <div style={{ margin: "2%", padding: "2%",  backgroundColor: "#FAF2FF", borderRadius: "10px" }}>
            <div style={{ display: "flex" }}>
                <h3>{title}</h3>
                <div style={{ marginLeft: "auto"  }}>
                    <h4>{author}</h4>
                </div>
            </div>
            <Divider />
            <div style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical" }}>
                <h4>{content}</h4>
            </div>
        </div>
    )
};

class PostCard extends Component {
    constructor(props) {
        super(props);
        this.title = 'no title';
        this.author = 'not author'
        this.content = 'no content';
    }

    render() {
        return(
            <div>
                {card(this.props.title, this.props.author, this.props.content)}
            </div>
        )
    }
}

export default PostCard;
