import React, { Component } from 'react';
import { Input, Sidebar, Sidenav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const sideBar = (
    <Sidebar 
        style={{ display: "flex", flexDirection: "column" }}
        collapsible
    >
        <Sidenav.Header>
            <span>Query</span>
        </Sidenav.Header>
        <Sidenav.Body>
            <Input as="textarea" rows={30} placeholder="Type here..." />
        </Sidenav.Body>
    </Sidebar>
)

class QueryBar extends Component {
  render() {
    return(
        <div>
            {sideBar}
        </div>
    )
  }
}

export default QueryBar;
