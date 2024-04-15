import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Container,Col,Image,Button,Form, ProgressBar, Row } from 'react-bootstrap'
import step from "../../assets/step.png"
import txt from "../../assets/Tell Us About Yourself.png"
import gb from "../../assets/Group 1397878095.png"

function Aboutyourself() {
  return (
    <div>
      <Header/>
      <ProgressBar now={70}/>
      <Container fluid className='rm1'>
        <Row className='btm doc pb-0 diff'>
        <Col className='d-flex justify-content-center flex-column align-items-center'>
            <Image src={step} className='py-3'/>
            <Image src={txt}/>
            </Col>
        </Row>
        <Col className='d-flex justify-content-center align-items-center diff pb-5'>
        <Row className='box'>
            <Row > 
            <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicname">
               <Form.Control type="text" placeholder="Enter your full name"/>
              </Form.Group>
            </Form>
            </Col>
            <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicemail">
               <Form.Control type="email" placeholder="Enter your email address" />
              </Form.Group>
            </Form>
            </Col>
            </Row>
            <Row>
                <Col>
                <Form>
              <Form.Group className="mb-3" controlId="formBasicage">
               <Form.Control type="number" placeholder="Enter your age (optional)" />
              </Form.Group>
            </Form>
                </Col>
                <Col>
                <Form>
              <Form.Group className="mb-3" controlId="formSelectyourcountry">
               <Form.Control type="select" placeholder="Select your country" />
              </Form.Group>
            </Form>
                </Col>
            </Row>
            <Row className=''>
            <Col className='col-4 d-flex justify-content-end align-items-start pb-5 ps-5'>
            <Button variant="rm1" type="submit">
            Go back
      </Button>
            </Col>
            <Col className='col-6 d-flex justify-content-start align-items-start pb-5'>
            <Button variant="warning" type="submit">
      Submit Your Creation
      </Button>
            </Col>
        </Row>
        </Row>
        </Col>
        <Row>
            <Col className='d-flex justify-content-center align-items-center'>
            <Image src={gb}/>
            </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Aboutyourself
