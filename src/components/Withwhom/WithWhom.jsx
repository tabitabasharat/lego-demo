import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Col,Dropdown,DropdownButton,ButtonGroup, Container, Image, Button, Row, DropdownMenu, DropdownItem } from "react-bootstrap";
import lamp from "../../assets/Layer_12.png";
// import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import ppl from "../../assets/Group (1).png";

function WithWhom() {
  return (
    <div>
      <Header />
      <ProgressBar now={30} />
      <Container fluid className="rm1">
        <Row>
          <Col className=" col-lg-12 col-md-12 col-sm-12 col-12">
           <Col className="crd1 d-flex justify-content-center flex-column align-items-center">
              <p className="step stepfont d-flex justify-content-center align-items-center rounded-4">Step 2/5</p>
            </Col>
            <Col className="d-flex justify-content-center flex-column align-items-center btm ">
            <p className="text textfont text-center"><span className="colordesign">With Whom</span> Did You Build It? </p>
          </Col>
          
            <Row className=" col-12 ps-4 d-flex justify-content-center align-items-center w-100">
            <DropdownButton
          as={ButtonGroup}
          align={{ lg: 'end' }}
          title="Who did you build this with"
          // id="dropdown-menu-align-responsive-1"
          aria-placeholder="Who did you build this with"
          className="boxx"
        >
          <DropdownItem>
          <Form className="d-flex justify-content-start">
                      {["radio"].map((type) => (
                        <div key={`default-${type}`}>
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={`Mom`}
                            className=" hover:bg-warning"
                          />
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={`Dad`}
                          />
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={`Brother`}
                          />
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={`Sister`}
                          />
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={`Friend`}
                          />
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={`Dog`}
                          />
                        </div>
                      ))}
                    </Form>
          </DropdownItem>
        </DropdownButton>
            </Row>
            <Row className=" crd1 d-flex flex-row justify-content-center col-12">
              <Col className=" d-flex justify-content-end align-items-center ">
                <Button variant="rm1" type="submit">
                  Go back
                </Button>
              </Col>
              <Col>
                <Button variant="warning" type="submit">
                  Submit Your Creation
                </Button>
              </Col>
            </Row>
          </Col>
          <Col className="lamp pa d-flex justify-content-end ">
            <Image src={lamp} className="lamp" />
          </Col>
        </Row>
        <Row>
          <Col className=" d-flex justify-content-center align-items-center">
            <Image src={ppl} className="ppl" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default WithWhom;
