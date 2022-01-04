import React, { Component } from 'react';
import { Divider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const card = (
    <div style={{ margin: "2%", padding: "2%",  backgroundColor: "#FAF2FF", borderRadius: "10px" }}>
        <div style={{ display: "flex" }}>
            <h3>title</h3>
            <div style={{ marginLeft: "auto"  }}>
                <h4>name</h4>
            </div>
        </div>
        <Divider />
        <div style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical" }}>
            <h4>你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你你</h4>
        </div>
    </div>
);

class PostCard extends Component {
  render() {
    return(
        <div>
            {card}
        </div>
    )
  }
}

export default PostCard;
