import React from "react";
import { Col, Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/c.png";
import "./Header.css";
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className=" sticky-top bg-body-tertiary pb-0 pt-0"
    >
      <Container fluid className="r2 bg-warning">
        <Navbar.Brand href="#home">
          <Image src={logo} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Col className="flex-col ">
            <p href="#Cerfied Stores" className="m-0 certify">
              Cerfied Stores
            </p>
            <p className="m-0 lego">lego.me</p>
          </Col>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#HowtheContestWorks">
              How the Contest Works
            </Nav.Link>
            <Nav.Link href="#Rewards&Recognition">
              Rewards & Recognition
            </Nav.Link>
            <Nav.Link href="#FAQs">FAQs</Nav.Link>
            <Nav.Link href="#Contactus">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
