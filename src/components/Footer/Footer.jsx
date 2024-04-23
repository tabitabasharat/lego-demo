import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import logo from "../../assets/c.png";

function Footer() {
  return (
    <div>
      <Container fluid className=" border border-top">
        <Row className="top1 side">
          <Row className="foot d-flex flex-md-nowrap d-flex flex-lg-wrap">
            <Col className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
              <Image src={logo} />
            </Col>
            <Col className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <Row>
                <p className="fs-2 h5">Discover</p>
              </Row>
              <Row>
                <a href="#About LEGO" className="text-secondary styl">
                  About LEGO
                </a>
              </Row>
              <Row>
                <a href="#LEGO Store Locator" className="text-secondary styl">
                  LEGO Store Locator
                </a>
              </Row>
              <Row>
                <a
                  href="#LEGO Ramadan Campaign"
                  className="text-secondary styl"
                >
                  LEGO Ramadan Campaign
                </a>
              </Row>
              <Row>
                <a href="#Contact us" className="text-secondary styl">
                  Contact us
                </a>
              </Row>
            </Col>
            <Col className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <Row>
                <p className="fs-2 h5">Legal and Privacy</p>
              </Row>
              <Row>
                <a href="#Terms and conditions" className="text-secondary styl">
                  Terms and conditions
                </a>
              </Row>
              <Row>
                <a href="#Privacy Policy" className="text-secondary styl">
                  Privacy Policy
                </a>
              </Row>
              <Row>
                <a href="#Cookie and Policies" className="text-secondary styl">
                  Cookie and Policies
                </a>
              </Row>
            </Col>
          </Row>
          <Row className="crdd">
            <p>
              LEGO, the LEGO logo, the Minifigure, DUPLO, FRIENDS logo, NINJAGO,
              MINIFIGURES logo are trademarks of The LEGO Group. ©2023 The LEGO
              Group
              <br />
              COPYRIGHT ©2023 ATW Events LLC FZ. All Rights Reserved.
            </p>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
