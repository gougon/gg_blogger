import React, { Component } from 'react';
import { Navbar, Nav, Dropdown, Button } from 'rsuite';
import Admin from '@rsuite/icons/Admin';
import 'rsuite/dist/rsuite.min.css';

const userIcon = <Admin style={{ fontSize: '2em', textAlign: 'center' }} />

const navbar = (
    <Navbar>
        <Navbar.Brand href="#">
            GGblogger
        </Navbar.Brand>
        <Nav pullRight>
            <Dropdown title="資料夾">
                <Dropdown.Item>Directory 1</Dropdown.Item>
                <Dropdown.Item>Directory 2</Dropdown.Item>
                <Dropdown.Item>Directory 3</Dropdown.Item>
            </Dropdown>
            <Dropdown title="文章">
                <Dropdown.Item>Post 1</Dropdown.Item>
                <Dropdown.Item>Post 2</Dropdown.Item>
                <Dropdown.Item>Post 3</Dropdown.Item>
            </Dropdown>
            <Nav pullRight>
                <Nav.Item icon={userIcon}></Nav.Item>
            </Nav>
        </Nav>
    </Navbar>
)

class Header extends Component {
  render() {
    return(
      <div>
        {navbar}
      </div>
    )
  }
}

export default Header;
