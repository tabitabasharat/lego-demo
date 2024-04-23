import React from "react";
import Header from "../Header/Header";
import {
  Container,
  Col,
  Button,
  Image,
  Form,
  ProgressBar,
  Row,
} from "react-bootstrap";
import Footer from "../Footer/Footer";
import step from "../../assets/Frame 15978172.png";
import txt from "../../assets/Tell us the Story.png";
import bubbles from "../../assets/Group 62.png";
import blocks from "../../assets/Layer_1 (2).png";

function Storytime() {
  return (
    <div>
      <Header />
      <ProgressBar now={50} />
      <Container fluid className="rm1 ">

        <Col className="crd1 d-flex justify-content-center flex-column align-items-center">
              <p className="step stepfont d-flex justify-content-center align-items-center rounded-4">Step 3/5</p>
            </Col>
            <Col className="d-flex justify-content-center flex-column align-items-center btm ">
            <p className="text1 storytimefont textfont text-center p1"><span className="colordesign">Tell us the Story</span><br/> Behind Your Design </p>
          </Col>
                  <Row className="temtext rm">
          <Col className=" p-0 d-flex justify-content-end align-items-center ">
            <Image src={bubbles} className="bubles" />
          </Col>
        </Row>
        <Row className="d-flex pb-5 flex-column">
          <Col className=" mx-auto cont">
            <Form>
              <Form.Group
                className="mb-2"
                controlId="formSelectNameyourcreation"
              >
                <Form.Control type="text" placeholder="Name your creation" />
              </Form.Group>
            </Form>
          </Col>
          <Col className=" mx-auto cont btm">
            <Form>
              <Form.Group controlId="formSelectcharacteristics">
                <Form.Control
                  type="text"
                  placeholder="What characteristics does your character have?"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 d-flex justify-content-center align-items-start pb-5  ">
            <Button variant="rm1" type="submit">
              Go back
            </Button>
          {/* </Col>
          <Col className="col-6 d-flex justify-content-start align-items-start pb-5"> */}
            <Button variant="warning" type="submit">
              Submit Your Creation
            </Button>
          </Col>
          <Col className="col-2 blook d-flex justify-content-start align-items-end">
            <Image src={blocks} className=""/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Storytime;
