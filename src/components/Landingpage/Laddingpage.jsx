import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import lamp1 from "../../assets/Layer_1 (1).png";
import lamp from "../../assets/Layer_1.png";
import text from "../../assets/Frame 1597878236.svg";
import "./Landingpage.css";
import strt from "../../assets/Frame 1597878178.png";
import blocks from "../../assets/Layer_1 (2).png";
import bunny from "../../assets/Frame 1597878175.png";
import bunny2 from "../../assets/Frame 1597878176.png";
import bunny3 from "../../assets/Frame 1597878177.png";
import home from "../../assets/Group 1597878076.png";
import legoboy from "../../assets/Asset 2 1.png";
import card from "../../assets/Group 1597878078.png";
import tag from "../../assets/Frame 1597878172.png";
import hows from "../../assets/Here’s how.png";
import legoGirl from "../../assets/RAMADAN-2024-FIGs_MOTHER_5 1.png";
import longlmp from "../../assets/Layer_12.png";
import balls from "../../assets/Group 22.png";
import crd from "../../assets/Frame 1597878192.png";
import ball from "../../assets/Group 1597878079.png";
import crd1 from "../../assets/Frame 1597878193.png";
import crd2 from "../../assets/Frame 1597878194.png";
import ballss from "../../assets/Isolation_Mode.png";
import crd3 from "../../assets/Frame 1597878195.png";
import cup from "../../assets/Group 1597878088.png";
import txt from "../../assets/The Essence of our Celebration.png";
import deou from "../../assets/Asset 2 2.png";
import rewrt from "../../assets/Frame 1597878172 (11).png";
import creativity from "../../assets/Celebrate your Creativitye.png";
import txtcrd from "../../assets/1.png";
import txtcrd1 from "../../assets/Frame 1597878197.png";
import txtcrd2 from "../../assets/Frame 1597878194 (1).png";
import txtcrd3 from "../../assets/Frame 1597878198.png";
import step from "../../assets/Frame 1597873172.png";
import gotqns from "../../assets/qnans.png";
import legounc from "../../assets/Isolation_Mode1.png";
import curlboy from "../../assets/Layer_11.png";
import Accordion from "react-bootstrap/Accordion";
import singlelamp from "../../assets/Group 1597878080.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Content1() {
  return (
    <div>
      <Header />
      <Container fluid className="rm1">
        <Row className="rm">
          <Col className="lampl">
            <Image src={lamp} />
          </Col>
          <Col className="logo mb-3 fontsnd12 d-flex justify-content-center pt-5">
            <Image src={text} className="logo mb-3 fontsnd12" />
          </Col>
          <Col className="lampRr">
            <Image src={lamp1} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex pt-0 pe-0 justify-content-center align-items-center text-center flex-column">
            <p className="p1 firstconttext pt-0">
              Celebrate the spirit of connection and creativity.{" "}
              <span className="firstconttext  text-warning ">
                Create the face
                <br /> of EID{" "}
              </span>
              <span className="firstconttext h6">with someone special </span>- a family
              member, a friend, or
              <br /> even your pet. Share your creation and
              <span className="h6 firstconttext"> become part of</span>{" "}
              <span className="text-warning firstconttext">
                LEGO® <br />
                Certified Stores Eid Celebration.
              </span>
            </p>
            <Image src={strt} className="doc" />
          </Col>
        </Row>
        <Row className="rm d-flex align-items-end flex-nowrap justify-content-between">
          <Col className="blocks d-flex align-items-baseline">
            <Image src={blocks} className="blocks d-flex align-items-baseline" />
          </Col>
          <Col className="col-lg-8 col-md-8 col-sm-8 col-8 pb-5 bunnybox2 d-flex gap-5 d-flex justify-content-center">
            <Image src={bunny} className="bunny2 bunny" />
            <Image src={bunny2} className="bunny1 bunnycont bunnybox" />
            <Image src={bunny3} className="bunny1 bunnycont bunnybox" />
          </Col>

          <Col className="d-flex justify-content-end px-0">
            <Image src={home} className="hom" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="rm bg-warning">
        <Row className="cardHite">
          <Col className="col-lg-4 col-md-4 z-1 col-sm-12 col-12 d-flex justify-content-end align-self-end">
            <img src={legoboy} className="legoboy" />
          </Col>
          <Col className="col-lg-4 col-md-4 col-sm-11 col-11">
            <Row className=" align-self-center ">
              <img src={card} className="crd " />
            </Row>
            <Row className="d-flex justify-content-center align-items-center text-center">
              <p className=" z-1">
                Please note: Participation in this heartfelt celebration of
                creativity and connection is exclusively open to our friends in
                the <small className="h6">UAE, Qatar, and Kuwait.</small>
              </p>
            </Row>
          </Col>
          <Col className="col-lg-4 col-md-4 d-flex justify-content-start align-self-end">
            <img src={legoGirl} className="legogirl" />
          </Col>
        </Row>
      </Container>
      <Container fluid id="HowtheContestWorks" className="rm1">
        <Row>
          <Row className="col-12 doct flex-column">
          <Col className="crd1 d-flex justify-content-center flex-column align-items-center">
              <p className="reward rewardfont d-flex justify-content-center align-items-center rounded-4">How the Contest works</p>
            </Col>
            <Col className="d-flex justify-content-center flex-column align-items-center btm ">
            <p className="text13 textfont1 pb-0 text-center mb-0 p1">Here’s how you can<br/> make <span className="colordesign"> history</span></p>
          </Col>
          </Row>
          <Col className=" d-flex justify-content-end">
            <Image src={longlmp} className=" lampR " />
          </Col>
        </Row>
        <Row className="boxfixing1 flex-column rm cardlego">
          <Col className="btm d-flex justify-content-center">
            <Image src={balls} className="balls" />
            <Image src={crd} className="cardlego z-0 " />
          </Col>
          <Col className="btm d-flex justify-content-center">
            <Image src={crd1} className="cardlego" />
            <Image src={ball} className="ball" />
          </Col>
          <Col className="btm d-flex justify-content-center">
            <Image src={ballss} className="ballss" />
            <Image src={crd2} className="cardlego z-0" />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src={crd3} className="btm cardlego" />
          </Col>
          <Col>
            <Image src={cup} className="bloks cup " />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="BY">
          <Col className="col-lg-6 col-md-12 col-sm-12 col-12 bgs bkg">
            <Row>
              <Col className="py-3 ">
                <span
                  width={"100%"}
                  className="WBER p-2 px-3 rounded-2 text-white rm2 col-lg-12 col-md-6 col-sm-6 col-12 mb-4"
                >
                  Why Build with Every One This Ramadan?
                </span>
              </Col>
            </Row>
            <Row className="col-12">
              <Image src={txt} className="mb-4" />
            </Row>
            <Row className=" text-white fs-4">
              <p className="">
                Ramadan brings a unique opportunity to strengthen bonds, foster
                understanding, and share in the joy of creation. The
                <small className="fs-4 h6 text-warning">
                  {" "}
                  Build with Everrry One to Win{" "}
                </small>
                initiative embodies this spirit by inviting you to collaborate
                with friends, family, or anyone special to you, crafting a piece
                that represents the values and joy of Ramadan.
              </p>
              <p>
                It’s more than just building with LEGO bricks;
                <small className="h6 fs-4">
                  {" "}
                  it’s about building relationships, memories, and a sense of
                  community.
                </small>{" "}
                By joining hands in creativity, we reflect the true essence of
                Ramadan—unity, generosity, and the joy of giving.
              </p>
            </Row>
            <Row className="col-5">
              <Image src={strt} className=" pt-3 pb-5" />
            </Row>
          </Col>
          <Col className="col-lg-6 col-md-12 col-sm-12 col-12 bg-warning">
            <Row className="d-flex justify-content-end">
              <Col className="col-2 pr-3 d-flex justify-content-end aling-self-end">
                <Image src={lamp1} />
              </Col>
            </Row>
            <Row className=" col-12">
              <Col className="d-flex justify-content-center imgfont1 align-items-center">
                <Image src={text} width={"100%"} className="imgfont1" />
              </Col>
            </Row>
            <Row>
              <Image src={deou} className="p-0 pt-5" />
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid id="Rewards&Recognition" className="rm1">
        <Row className="doct d-flex justify-content-center flex-column align-items-center">
        <Col className="crd1 d-flex justify-content-center flex-column align-items-center">
              <p className="reward rewardfont stepfont d-flex justify-content-center align-items-center rounded-4">Rewards & Recognition</p>
            </Col>
            <Col className="d-flex justify-content-center flex-column align-items-center">
            <p className="text13 textfont1 text-center mb-0">Celebrate your<span className="colordesign"> Creativity</span></p>
          </Col>
        </Row>
        <Row className="text-center px-0">
          <p className="p1 fs-4 diff">
            Every submission is a
            <small className="fs-4 h6">
              {" "}
              showcase of talent and imagination,
            </small>{" "}
            to honor your
            <br /> effort and creativity.
            <small className=" text-warning fs-4 h6">
              {" "}
              Here's what awaits the creator of the winning creation:
            </small>{" "}
          </p>
        </Row>

        <Row className=" boxfixing1 d-flex  justify-content-center flex-row row-gap-4 pb-4">
          <Col className="col-lg-6 col-md-12 col-sm-12 col-12">
            <Image src={txtcrd} width={"100%"} />
          </Col>
          <Col className=" col-lg-6 col-md-12 col-sm-12 col-12">
            <Image src={txtcrd1} width={"100%"} />
          </Col>
        </Row>
        <Row className="boxfixing1 d-flex justify-content-center row-gap-4 flex-row pb-5 ">
          <Col className=" d-flex justify-content-center col-lg-6 col-md-12 col-sm-12 col-12">
            <Image src={txtcrd2} width={"100%"} />
          </Col>
          <Col className="col-lg-6 col-md-12 col-sm-12 col-12col-6 col-md-12  ">
            <Image src={txtcrd3} width={"100%"} />
          </Col>
        </Row>
      </Container>
      <Container fluid id="FAQs" className="rm1">
        <Row className=" d-flex flex-row">
          <Col className="">
            <Row className=" d-flex justify-content-center flex-column align-items-center">
            <Col className="crd1 d-flex justify-content-center flex-column align-items-center">
              <p className="step stepfont d-flex justify-content-center align-items-center rounded-4">FQAs</p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
            <p className=" textfont text-center p-0 p1">Got Questions? <br/><span className="colordesign">We've Got Answers!</span></p>
          </Col>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-2">
          <Col className="col-lg-3 col-md-0 col-sm-0 col-xs-0 d-flex justify-content-center">
            <Image src={legounc} className="lamp" />
          </Col>
          <Col className="accordian col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Can I submit more than one design?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, participants are welcome to submit multiple designs, but
                  each must be unique.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Are there any age restrictions for participation?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How will the winning design be selected?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  When will the winner be announced?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Do I retain the rights to my design after submission?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-lg-3 col-md-0 col-sm-0 col-xs-0 d-flex justify-content-end align-items-end">
            <Image src={curlboy} className="lamp" />
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default Content1;
