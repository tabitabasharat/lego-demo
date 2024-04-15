import React from 'react'
import Header from '../Header/Header'
import { Container,Col,Button,Image, Form,ProgressBar, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import step from "../../assets/Frame 15978172.png"
import txt from "../../assets/Tell us the Story.png"
import bubbles from "../../assets/Group 62.png"
import blocks from "../../assets/Layer_1 (2).png"

function Storytime() {
  return (
    <div>
      <Header/>
      <ProgressBar now={50}/>
      <Container fluid className='rm1'>
        <Row className=''>
            <Row className='col-8 d-flex justify-content-center flex-column align-items-end btm rm crd1'>
            <Col className='col-8 d-flex justify-content-center flex-column align-items-end ps-5'>
            <Image src={step} className='py-3 ps-5 mx-auto'/>
            <Image src={txt}/>
            </Col>
            </Row>
            <Col className='col5 p-0 d-flex justify-content-end align-items-center '>
            <Image src={bubbles} className='bubles'/>
            </Col>
        </Row>
        <Row className='d-flex flex-column'>
            <Col className=' mx-auto cont'>
            <Form >
              <Form.Group className="mb-2" controlId="formSelectNameyourcreation">
               <Form.Control type="text" placeholder="Name your creation" />
              </Form.Group>
            </Form>
            </Col>
            <Col className=' mx-auto cont btm'>
            <Form>
              <Form.Group controlId="formSelectcharacteristics">
               <Form.Control type="text" placeholder="What characteristics does your character have?" />
              </Form.Group>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col className='col-2'>
            <Image src={blocks}/>
            </Col>
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
      </Container>
      <Footer/>
    </div>
  )
}

export default Storytime
