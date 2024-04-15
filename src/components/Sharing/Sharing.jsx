import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Row,Col,Container,Button,Image } from 'react-bootstrap'
import txt from "../../assets/Frame 15978781.png"
import cardh from "../../assets/Frame 1597878248.png"

function Sharing() {
  return (
    <div>
      <Header/>
      <Container fluid className='rm1'>
        <Row>
        <Col className='d-flex justify-content-center flex-column align-items-center topp btm'>
            <Image src={txt}/>
            </Col>
        </Row>
        <Row>
        <Col className='d-flex justify-content-center flex-column align-items-center btm'>
            <Image src={cardh}/>
            </Col>
        </Row>
        <Row>
            <Col className='d-flex justify-content-center flex-column align-items-center text-center btm'>
            <p className='mb-0 fs-5'>Your collaborative masterpiece is<small className=' fs-5 fw-3 h6'> now part of LEGO's Ramadan celebration.</small> <br/>
            Here's a<small className=' text-warning fs-5 h6'> preview of how your design will be showcased.</small></p>
            </Col>
        </Row>
        <Row className='d-flex justify-content-center col-12'>
        <Col className=' d-flex justify-content-center align-items-center h6 '>
            <Button variant="warning" type="submit">
            Download and Share Creation
      </Button>
            </Col>
        </Row>
        <Row>
            <Col className='d-flex justify-content-center col-12 end '>
            <p>Share your LEGO creation with the world! Use<a href=' #BuildWithEveryOne' className=''> #BuildWithEveryOne </a>and tag us in your posts</p>

            </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Sharing
