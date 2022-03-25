import React, {Component} from 'react';
import bookLogo from '../images/bookLogo.png'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../pages/BootstrapNavbar.css';

export default class BootstrapNavbar extends Component {
    render() {
        return (
            <>
                {/* <Navbar bg="dark" variant={"dark"} expand="lg"> */}
                {/* <Navbar className="navbar" bg="dark" variant={"dark"} expand="lg"> */}
                {/* <Navbar className="navbar" variant={"dark"} expand="lg"> */}
                {/* <Navbar fixed={'top'} className={'position-sticky ps-0'}> */}
                <Navbar className="navbar" expand="lg">
                <Container fluid>
                    <Navbar.Brand><img className="nav-logo" src = {bookLogo} alt = "Book logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        // className="me-auto"
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <Nav.Link id="home-link" as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link id="about-link" as={Link} to={"/"}>About</Nav.Link>
                        <Nav.Link id="contact-link" as={Link} to={"/"}>Contact</Nav.Link>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown"> */}
                        {/* <NavDropdown.Item as={Link} to={"/"}>Action</NavDropdown.Item> */}
                        {/* <NavDropdown.Item href="#action4">Another action</NavDropdown.Item> */}
                        {/* <NavDropdown.Item as={Link} to={"/"}>Another action</NavDropdown.Item> */}
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item as={Link} to={"/"}>Something else here */}
                        {/* </NavDropdown.Item> */}
                        {/* </NavDropdown> */}
                        {/* <Nav.Link as={Link} to={"/"}>
                        Link
                        </Nav.Link> */}
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        {/* <Button variant="outline-success">Search</Button> */}
                        {/* <Button>Search</Button> */}
                        {/* <button className="btn btn-outline-secondary border-left-0 border" type="button">
                            <i class="fa fa-search"></i>
                        </button> */}
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