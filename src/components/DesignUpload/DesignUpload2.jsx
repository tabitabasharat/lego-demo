import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Row,Col,Image, Button, Container } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import bunny from "../../assets/Frame 1597878175.png"
import bunny2 from "../../assets/Frame 1597878176.png"
import bunny3 from "../../assets/Frame 1597878177.png"
import lable from "../../assets/Frame 1597878162.png"
import txt from "../../assets/Upload Your Design.png"
import file from "../../assets/bii_file-earmark-image.png"


function DesignUpload2() {
  return (
    <div>
      <Header/>
      <ProgressBar now={20} />
      <Container fluid className='px-5 rm1'>
        <Row className='d-flex justify-content-center align-items-center flex-column'>
      <Col className='d-flex justify-content-center flex-column align-items-center btm '>
        <Col className='crd1'>
            <Image src={lable} className='py-3'/>
            </Col>
            <Image src={txt}/>
            </Col>
            <Row className='border col-12 bg-white file d-flex justify-content-center align-items-center pt-0 px-5'>
              <Col className=''>
                <Row className=''>
                  <Col className='col-1 d-flex justify-content-end'>
                    <Image src={file}/>
                  </Col>
                  <Col className='col-11'>
                    <Row className='d-flex justify-content-around flex-row'>
                        <Col className='py-2 text-secondary'>lego_ramadan_design.jpeg</Col>
                        <Col className='d-flex justify-content-end'>5.7MB</Col>
                    </Row>
                    <Row className='d-flex flex-row'>
                    <Col className='col-1 d-flex justify-content-start align-items-center p-0'>
            <Button variant="white" type="submit" className='text-primary'>
            Preview
      </Button>
            </Col>
            <Col className=' d-flex justify-content-start align-items-center '>
            <Button variant="white" type="submit" className='text-danger'>
            Delete
      </Button>
            </Col>
                    </Row>
                  </Col>
                </Row>
                </Col>
            </Row>
            </Row>
      <Row className='smt py-5'>
      <Row className='d-flex justify-content-center col-12'>
      <Col className=' d-flex justify-content-center align-items-center h6 btm1 '>
            <Button variant="warning" type="submit">
            Continue to Next Step
      </Button>
            </Col>
        </Row>
            </Row>
            <Row>
              <Col className='d-flex justify-content-center gap-5 crd'>
              <Image src={bunny} className='bunny'/>
              <Image src={bunny2}/>
              <Image src={bunny3}/>
              </Col>
              </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default DesignUpload2
