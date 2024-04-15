import React from 'react'
import { Col,Row, Container,Image } from 'react-bootstrap'
import logo from "../../assets/c.png"

function Footer() {
  return (
    <div>
      <Container fluid className=' border border-top'>
        <Row className='top1 side '>
        <Row className='foot'> 
            <Col className='col-2'>
              <Image src={logo}/>
            </Col>
            <Col className='col-2'>
            <Row>
                <p className='fs-2 h5'>Discover</p>
            </Row>
            <Row>
                <a href="#About LEGO" className='text-secondary styl'>About LEGO</a>
            </Row>
            <Row>
            <a href="#LEGO Store Locator" className='text-secondary styl'>LEGO Store Locator</a>
            </Row>
            <Row>
            <a href="#LEGO Ramadan Campaign" className='text-secondary styl'>LEGO Ramadan Campaign</a>
            </Row>
            <Row>
            <a href="#Contact us" className='text-secondary styl'>Contact us</a>
            </Row>
            </Col>
            <Col className='col-2'>
            <Row>
                <p className='fs-2 h5'>Legal and Privacy</p>
            </Row>
            <Row>
            <a href="#Terms and conditions" className='text-secondary styl'>Terms and conditions</a>
            </Row>
            <Row>
            <a href="#Privacy Policy" className='text-secondary styl'>Privacy Policy</a>
            </Row>
            <Row>
            <a href="#Cookie and Policies" className='text-secondary styl'>Cookie and Policies</a>
            </Row>
            </Col>
        </Row>
        <Row className='crd'>
            <p>LEGO, the LEGO logo, the Minifigure, DUPLO, FRIENDS logo, NINJAGO, MINIFIGURES logo are trademarks of The LEGO Group. ©2023 The LEGO Group<br/>COPYRIGHT ©2023 ATW Events LLC FZ. All Rights Reserved.</p>
        </Row>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
