import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Image, Col, Container, Row, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import lable from "../../assets/Frame 2597878172.png";
import txt from "../../assets/Upload Your Design.png";
import share from "../../assets/bxs-cloud-upload.svg.png";
import conti from "../../assets/Frame 1597878235.png";
import bunny from "../../assets/Frame 1597878175.png";
import bunny2 from "../../assets/Frame 1597878176.png";
import bunny3 from "../../assets/Frame 1597878177.png";

function DesignUpload() {
  return (
    <div>
      <Header />
      <ProgressBar now={20} />
      <Container fluid className="rm1">
        <Row className="legobox30 flex-column d-flex justify-content-center align-items-center">
        <Col className="crd1 d-flex justify-content-center flex-column align-items-center">
              <p className="step stepfont d-flex justify-content-center align-items-center rounded-4">Step 2/5</p>
            </Col>
            <Col className="d-flex justify-content-center flex-column align-items-center btm ">
            <p className="text uploadfont textfont text-center mb-0">Upload <span className="colordesign">Your Design</span> </p>
          </Col>
          <Col className="flex-column d-flex justify-content-center align-items-center bg-white bckdiv border">
            <Row>
              <Image src={share} className="cloud" />
            </Row>
            <Row className="">
              <Col>
                <Row className="fontbox fntstyle d-flex flex-column justify-content-center align-items-center text-center">
                  <p className="selectfont m-0 h1">
                    Select a file or drag and drop here
                  </p>
                  <p className="selectfont1 text-secondary m-0 fs-6">
                    JPG, PNG or PDF, file size no more than 10MB
                  </p>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="selectorbox d-flex justify-content-center align-items-center h6">
                <Button variant="primary" type="submit">
                  Select File
                </Button>
              </Col>
            </Row>
          </Col>
          <Row className="d-flex justify-content-center col-12">
            <Col className="doc d-flex justify-content-center align-items-center h6 py-5 ">
              <Button variant="secondary" type="submit">
                Continue to Next Step
              </Button>
            </Col>
          </Row>
          <Row className="doc pt-0">
            <Col className=" d-flex justify-content-center gap-5">
              <Image src={bunny} className="bunny bunnies" />
              <Image src={bunny2} className="bunny" />
              <Image src={bunny3} className="bunny" />
            </Col>
          </Row>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default DesignUpload;
