import React, {Component} from 'react';
import bookLogo from '../images/bookLogo.png'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../pages/BootstrapNavbar.css';

export default class BootstrapNavbar extends Component {
    render() {
        return (
            <>
             <Navbar id="navbar" className="navbar" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <img className="nav-logo" src = {bookLogo} alt = "Book logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll>
                    <Nav.Link id="home-link" as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link id="about-link" as={Link} to={"/"}>About</Nav.Link>
                    <Nav.Link id="contact-link" as={Link} to={"/"}>Contact</Nav.Link> 
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    <button className="btn btn-light" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </>
        )
    }
}