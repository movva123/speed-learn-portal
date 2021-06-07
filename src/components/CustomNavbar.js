import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
const CustomNavbar = () => {
    return (
        
        <Navbar bg={"primary"} text={"white"}>
        <Navbar.Brand href="#home">Speed Learn</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>   
        
    )
}

export default CustomNavbar
