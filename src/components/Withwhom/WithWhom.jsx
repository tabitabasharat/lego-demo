import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Container,Image,Button, Row } from 'react-bootstrap';
import lable from "../../assets/Frame 1597878162.png"
import txt from "../../assets/With Whom Did You Build It_.png"
import lamp from "../../assets/Layer_12.png"
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ppl from "../../assets/Group (1).png"

function WithWhom() {
  return (
    <div>
        <Header/>
        <ProgressBar now={30}/>
        <Container fluid className='rm1'>
            <Row>
                <Col className='col-11'>
                <Row>
                <Col className='d-flex justify-content-center flex-column align-items-center btm crd1'>
                 <Image src={lable} className='py-3'/>
                 <Image src={txt}/>
                </Col>
                </Row>
                <Row>
                <Dropdown className='d-flex justify-content-center align-items-center '>
                  <Dropdown.Toggle id="dropdown-basic" aria-placeholder='Who did you build this with'>
                  Who did you build this with
                  </Dropdown.Toggle>
                  <Row>
                  <Dropdown.Menu>
                  <Form>
      {['checkbox' ].map((type) => (
        <div key={`default-${type}`} className=" ">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Mom`}
          />          <Form.Check // prettier-ignore
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
          {/* <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          /> */}
        </div>
      ))}
    </Form>
            </Dropdown.Menu>
            </Row>
                </Dropdown>
                </Row>
                <Row className=' crd1 d-flex flex-row justify-content-center col-12'>
                <Col className=' d-flex justify-content-end align-items-center ps-5'>
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
                <Col className='col-1 px-0'>
                 <Image src={lamp}/>
                </Col>
            </Row>
            <Row>
                <Col className=' d-flex justify-content-center align-items-center'>
                 <Image src={ppl}/>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default WithWhom
