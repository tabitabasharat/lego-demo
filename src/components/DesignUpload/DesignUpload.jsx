import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Image,Col, Container, Row, Button } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import lable from "../../assets/Frame 2597878172.png"
import txt from "../../assets/Upload Your Design.png"
import share from "../../assets/bxs-cloud-upload.svg.png"
import conti from "../../assets/Frame 1597878235.png"
import bunny from "../../assets/Frame 1597878175.png"
import bunny2 from "../../assets/Frame 1597878176.png"
import bunny3 from "../../assets/Frame 1597878177.png"


function DesignUpload() {
  return (
    <div>
      <Header/>
      <ProgressBar now={20} />
      <Container fluid className='rm1'>
        <Row className='step1 flex-column d-flex justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center flex-column align-items-center pt-5'>
            <Image src={lable} className='lable pb-2'/>
            <Image src={txt} className='diff '/>
            </Col>
            <Col className=' flex-column d-flex justify-content-center align-items-center bg-white bckdiv border'>
                <Row className=''>
                    <Image src={share} className='cloud bloks'/>
                </Row>
                <Row>
                    <Col className=' d-flex flex-column justify-content-center align-items-center'>
                        <Row>
                        <p className='  fs-3 fw-1 h1'>Select a file or drag and drop here</p>
                        </Row>
                        <Row className='bloks'>
                        <p className='text-secondary fs-6'>JPG, PNG or PDF, file size no more than 10MB</p>
                        </Row>
                    </Col>              
                </Row>
                <Row >
                <Col className='d-flex justify-content-center align-items-center h6'>
            <Button variant="primary" type="submit">
            Select File
      </Button>
            </Col>
                </Row>
            </Col>
            <Row className='d-flex justify-content-center col-12'>
            <Col className='doc d-flex justify-content-center align-items-center h6 py-5 '>
            <Button variant="secondary" type="submit">
            Continue to Next Step
      </Button>
            </Col>
        </Row>
            <Row className='doc pt-0'>
              <Col className='d-flex justify-content-center gap-5'>
              <Image src={bunny} className='bunny'/>
              <Image src={bunny2}/>
              <Image src={bunny3}/>
              </Col>
              </Row>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default DesignUpload
