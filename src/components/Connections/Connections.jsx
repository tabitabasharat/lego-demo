import React from "react";
import Header from "../Header/Header";
import {
  Container,
  Col,
  Image,
  Button,
  Form,
  ProgressBar,
  Row,
} from "react-bootstrap";
import Footer from "../Footer/Footer";
import step from "../../assets/Frame 1547878172.png";
import txt from "../../assets/Let's Connect and Share Your Masterpiece.png";

function Connections() {
  const now = 85;
  return (
    <div>
      <Header />
      <ProgressBar now={now} label={`${now}%`} visuallyHidden />
      <Container fluid className="rm1">
        <Row>
        <Col className="crd1 d-flex justify-content-center align-items-center">
              <p className="step stepfont d-flex justify-content-center align-items-center rounded-4">Step 5/5</p>
            </Col>
            </Row>
            <Row className="pt-4 connection">
            <Col className="connections d-flex justify-content-center align-items-center btm">
            <p className="text textfont text-center  p1"> <span className="colordesign">Let's Connect</span> and<br/> Share Your Masterpiece </p>
          </Col>
          </Row>
        <Row className="conction d-flex flex-column justify-content-center align-items-center ">
          <Col className="d-flex justify-content-center align-items-center flex-column boqs">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter your social media account (optional)"
                  className="text-secondary"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I have read and agree to the Terms and Conditions"
                  variant="warning"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I give permission for my design to be shared on LEGO's social media platforms"
                  variant="warning"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I confirm that I am over the age of 18 or have parental consent to participate in this contest."
                  variant="warning"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="col-12 pb-5">
          <Col className="col-6 d-flex justify-content-end align-items-center pb-5">
            <Button variant="rm1" type="submit">
              Go back
            </Button>
          </Col>
          <Col className="col-6">
            <Button variant="warning" type="submit">
              Submit Your Creation
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Connections;
