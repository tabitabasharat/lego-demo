import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import bunny from "../../assets/Frame 1597878175.png";
import bunny2 from "../../assets/Frame 1597878176.png";
import bunny3 from "../../assets/Frame 1597878177.png";
import lable from "../../assets/Frame 1597878162.png";
import txt from "../../assets/Upload Your Design.png";
import file from "../../assets/bii_file-earmark-image.png";

function DesignUpload2() {
  return (
    <div>
      <Header />
      <ProgressBar now={20} />
      <Container fluid className="rm1">
        <Row className="legobox30 d-flex justify-content-center align-items-center flex-column">
          <Col className="crd1 d-flex justify-content-center flex-column align-items-center">
              <p className="step stepfont d-flex justify-content-center align-items-center rounded-4">Step 2/5</p>
            </Col>
            <Col className="d-flex uploadfont uploadfont1 justify-content-center flex-column align-items-center btm ">
            <p className="text uploadfont textfont text-center mb-0">Upload <span className="colordesign">Your Design</span> </p>
          </Col>
          <Row className="boxproperty bg-white justify-content-center align-items-center">
            <Col>
              <Row>
                <Col className=" col-1 col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
                  <Image src={file} className="file"/>
                </Col>
                <Col>
                  <Row className=" px-2">
                    <Col className=" text-secondary px-2 d-flex flex-row justify-content-between">
                      <p className=" mb-0">lego_ramadan_design.jpeg</p>
                      <p className=" mb-0">5.7MB</p>
                    </Col>
                  </Row> 
                  <Row className="upload-boxspace flex-row mt-3 ">
                    <Col className="col-lg-2 col-md-2 col-sm-2 col-3 p-0">
                      <Button
                        variant="white"
                        type="submit"
                        className="text-primary ps-2"
                      >
                        Preview
                      </Button>
                    </Col>
                    <Col className="col-lg-2 col-md-2 col-sm-2 col-2 p-0">
                      <Button
                        variant="white"
                        type="submit"
                        className=" text-danger ms-2"
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>  
        </Row>
        <Row className=" py-5 d-flex justify-content-center align-items-center">
          <Row className="d-flex justify-content-center col-12">
            <Col className=" d-flex justify-content-center align-items-center h6">
              <Button variant="warning" type="submit">
                Continue to Next Step
              </Button>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center gap-5 crd">
            <Image src={bunny} className="bunny" />
            <Image src={bunny2} className="bunny" />
            <Image src={bunny3} className="bunny" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default DesignUpload2;
