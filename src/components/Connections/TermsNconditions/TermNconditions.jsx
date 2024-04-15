import React from 'react'
import Header from '../../Header/Header'
import { Col, Container,Button, Row} from 'react-bootstrap'
import Footer from '../../Footer/Footer'

function TermNconditions() {
  return (
    <div>
      <Header/>
      <Container fluid className='rm1 bloks'>
      <Row className='infu'>
        <Col>
        <p className='fs-4 fw-1 h1 pt-5'>Terms and conditions</p>
        <p>All participants must be 18 years of age or older. All participants under the age of 18 years must share the<br/> information of their legal guardian.</p>
        <ul>
            <li>All entries must be submitted on the online website provided only and must include all information<br/> and images of the concept for the entry to be considered complete.</li>
            <li>All entries must be original and depict the values of Ramadan. Any duplicate or plagiarized<br/> applications will be automatically rejected.</li>
            <li>All entries must be submitted before April 1, 2024.</li>
            <li>All personal information provided by the participant must be accurate. LEGO® Certified Stores will use<br/> the information only to contact the final winner, it will not be shared with any third-party vendors.</li>
            <li>All participants that submit their entries automatically agree to their entries to be shared on all LEGO®<br/> Certified Stores channels and partners.</li>
            <li>LEGO® Certified Stores reserves the right to choose the winner and will be selected based on highest<br/> votes by fans on the brand Instagram page @LEGOstoresME and a judging panel.</li>
        </ul>
        </Col>
      </Row>
      <Row className='crd1 btm3'>
      <Col className=' d-flex justify-content-start align-items-center pb-5 '>
            <Button variant="warning" type="submit" className='text-dark'>
            Submit your creation
      </Button>
            </Col>
      </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default TermNconditions
