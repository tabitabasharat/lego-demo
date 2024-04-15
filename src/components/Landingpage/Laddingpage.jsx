import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
import lamp1 from "../../assets/Layer_1 (1).png"
import lamp from "../../assets/Layer_1.png"
import text from "../../assets/Frame 1597878236.svg"
import './Landingpage.css'
import strt from "../../assets/Frame 1597878178.png"
import blocks from "../../assets/Layer_1 (2).png"
import bunny from "../../assets/Frame 1597878175.png"
import bunny2 from "../../assets/Frame 1597878176.png"
import bunny3 from "../../assets/Frame 1597878177.png"
import home from"../../assets/Group 1597878076.png"
import legoboy from "../../assets/Asset 2 1.png"
import card from "../../assets/Group 1597878078.png"
import tag from "../../assets/Frame 1597878172.png"
import hows from "../../assets/Here’s how.png"
import legoGirl from "../../assets/RAMADAN-2024-FIGs_MOTHER_5 1.png"
import longlmp from "../../assets/Layer_12.png"
import balls from "../../assets/Group 22.png"
import crd from "../../assets/Frame 1597878192.png"
import ball from "../../assets/Group 1597878079.png"
import crd1 from "../../assets/Frame 1597878193.png"
import crd2 from "../../assets/Frame 1597878194.png"
import ballss from "../../assets/Isolation_Mode.png"
import crd3 from "../../assets/Frame 1597878195.png"
import cup from "../../assets/Group 1597878088.png"
import txt from "../../assets/The Essence of our Celebration.png"
import deou from "../../assets/Asset 2 2.png"
import rewrt from "../../assets/Frame 1597878172 (11).png"
import creativity from "../../assets/Celebrate your Creativitye.png"
import txtcrd from "../../assets/1.png"
import txtcrd1 from "../../assets/Frame 1597878197.png"
import txtcrd2 from "../../assets/Frame 1597878194 (1).png"
import txtcrd3 from "../../assets/Frame 1597878198.png"
import step from "../../assets/Frame 1597873172.png"
import gotqns from "../../assets/qnans.png"
import legounc from "../../assets/Isolation_Mode1.png"
import curlboy from "../../assets/Layer_11.png"
import Accordion from 'react-bootstrap/Accordion';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Content1() {
  return (
    <div>
        <Header/>
        <Container fluid className='rm1'>

        <Row className='rm'>
            <Col className='lampl'>
            <Image src={lamp}/>
            </Col>
            <Col className='contnt'>
            <Image src={text} className='logg '/>
            </Col>
            <Col className='lampR'>
            <Image src={lamp1}/>
            </Col> 
        </Row>
        <Row className=' infu'>
            <Col className='infoo '>
            <p className='fs-3 mb-0'>Celebrate the spirit of connection and creativity. <small className='fs-3 text-warning '>Create the face<br/> of EID </small><small className='fs-3 h6'>with someone special </small>- a family member, a friend, or<br/> even your pet. Share your creation and<small className='h6 fs-3'> become part of</small>  <small className='text-warning fs-3'>LEGO® <br/>Certified Stores Eid Celebration.</small></p>
            <Image src={strt} className='doc'/>
            </Col>
        </Row>
        <Row>
           <Col className='bloks col-2'>
             <Image src={blocks}/>
           </Col>
           <Col>
              <Row>
              <Col className='d-flex justify-content-center gap-5'>
              <Image src={bunny} className='bunny'/>
              <Image src={bunny2}/>
              <Image src={bunny3}/>
              </Col>
              </Row>
           </Col>
           <Col className=' hom col-2'>
           <Image src={home}/>
           </Col>
        </Row>
        </Container>
    
        <Container fluid className=' bg-warning'>
        <Row className='cardHite'> 
          <Col className='align-self-end'>
            <img src={legoboy}/>
          </Col>
          <Col>
              <Row className='align-self-center crd'>
          <img src={card}/> 
          </Row>
          <Row className='d-flex justify-content-center align-items-center text-center'>
             <p>Please note: Participation in this heartfelt celebration of creativity and connection is exclusively open to our friends in the <small className='h6'>UAE, Qatar, and Kuwait.</small></p>
          </Row>
          </Col>
          <Col className='d-flex justify-content-end align-self-end'>
          <img src={legoGirl}/> 
          </Col>
        </Row>
      </Container>
      <Container fluid id='HowtheContestWorks' className='rm1'>
        <Row>
            <Row className=''>
            <Row className='col-9 infu flex-column'>
            <Col className=' d-flex justify-content-end align-items-end ps-5'>
            <Image src={tag} className='pb-4 ps-5 mx-auto'/>
            </Col>
            <Col className=' d-flex justify-content-end align-items-end ps-5 pb-5'>
            <Image src={hows}/>
            </Col>
            </Row>
            <Col className=' lampR col-3'>
            <Image src={longlmp}/>
            </Col>
            </Row>
            <Col>
            <Row>
            <Col className='col-3 smt flex-column'>
                <Row className=' d-flex justify-content-end'>
                <Row className=' d-flex justify-content-center'>
                 <Image src={balls} className=' mb-3'/>
                </Row>
                </Row>
            </Col>
            <Col className='bord col-9 diff'>
            <Image src={crd}/>
            </Col> 
            </Row>
            <Row>
            <Col className='col-9 smtt flex-column'>
                <Row className=' d-flex justify-content-center'>
                <Row className=' d-flex justify-content-center'>
                 <Image src={crd1} className='diff '/>
                </Row>
                </Row>
            </Col>
            <Col className=' col-3'>
            <Image src={ball}/>
            </Col> 
            </Row>
            </Col>
            <Row>
            <Col className='col-3 smt flex-column '>
                <Row className=' d-flex justify-content-end'>
                <Row className=' d-flex justify-content-center'>
                 <Image src={ballss} className='p-0 mb-3'/>
                </Row>
                </Row>
            </Col>
            <Col className='bord col-9 ped diff'>
            <Image src={crd2}/>
            </Col> 
            </Row>
            <Row>
            <Col className='col-2  flex-column '>
                <Row className=' d-flex justify-content-end'>
                <Row className=' d-flex justify-content-center align-self-end'>
                 <Image src={cup} className='p-0 '/>
                </Row>
                </Row>
            </Col>
            <Col className='bord d-flex justify-content-start align-items-center col-10 bckgrud1'>
            <Image src={crd3}/>
            </Col> 
            </Row>
        </Row>
      </Container>
      <Container fluid>
        <Row>
            <Col className='col-7 bgs bckgrud'>
                <Row className='col-6'>
                <span class="badge rm2 fs-5 mb-4">Why Build with Everrry One This Ramadan?</span>
                </Row>
                <Row className='col-7'>
                    <Image src={txt} className='mb-4'/>
                </Row>
                <Row className=' text-white fs-3 mb-4'>
                    <p>Ramadan brings a unique opportunity to strengthen bonds, foster<br/> understanding, and share in the joy of creation. The<small className='fs-3 h6 text-warning'> Build with <br/>Everrry One to Win </small>initiative embodies this spirit by inviting you to <br/>collaborate with friends, family, or anyone special to you, crafting a <br/>piece that represents the values and joy of Ramadan.</p>
                    <p>It’s more than just building with LEGO bricks;<small className='h6 fs-3'> it’s about building<br/> relationships, memories, and a sense of community.</small> By joining<br/> hands in creativity, we reflect the true essence of Ramadan—unity, <br/>generosity, and the joy of giving.</p>
                </Row>
                <Row className='col-5'>
                <Image src={strt} className=' pt-4'/>
                </Row>
            </Col>
            <Col className='col-5 bg-warning'>
                <Row className='d-flex justify-content-end'>
                    <Col className='col-2 pr-3 d-flex justify-content-end aling-self-end'>
                    <Image src={lamp1}/>
                    </Col>
                </Row>
                <Row className=' col-12'>
                    <Col className='d-flex justify-content-center align-items-center'>
                    <Image src={text} className=''/>
                    </Col>
                </Row>
                <Row className='col-12'>
                    <Col>
                    <Image src={deou} />
                    </Col>
                </Row>
            </Col>
        </Row>
      </Container>
      <Container fluid id='Rewards&Recognition' className='rm1'>
        <Row className='doc'>
            <Row className='bckgrud pb-0 d-flex justify-content-center align-items-center text-center'>
            <Row className='col-12 d-flex justify-content-center flex-column align-items-center'>
            <Col className='col-12 d-flex justify-content-center flex-column align-items-center'>
            <Image src={rewrt} className=' mx-auto'/>
            <Image src={creativity}/>
            </Col>
            </Row>
                <Row className='pt-3'>
                    <p className='fs-3'>Every submission is a<small className='fs-3 h6'> showcase of talent and imagination,</small> to honor your <br/>effort and creativity.<small className=' text-warning fs-3 h6'> Here's what awaits the creator of the winning creation:</small> </p>
                </Row> 
            </Row>
            <Row className='d-flex  doc justify-content-around flex-row  pb-4'>
            <Col className='col-6 d-flex justify-content-end'><Image src={txtcrd}/></Col>
            <Col className=' col-6 d-flex justify-content-start'><Image src={txtcrd1}/></Col>
            </Row>
            <Row className='flex-row pb-5 '>
            <Col className='col-6 d-flex justify-content-end'><Image src={txtcrd2}/></Col>
            <Col className='col-6 d-flex justify-content-start'><Image src={txtcrd3}/></Col>
            </Row>
        </Row>
      </Container>
      <Container fluid id='FAQs' className='rm1'>
        <Row className=' d-flex flex-row'>
            <Col className=''>
            <Row className=' d-flex justify-content-center flex-column align-items-center'>
            <Col className=' d-flex justify-content-center flex-column align-items-center ps-5'>
            <Image src={step} className=' mx-auto'/>
            <Image src={gotqns}/>
            </Col>
            </Row>
            </Col>
        </Row>
        <Row>
         <Col className='col-3 '>
        <Image src={legounc}/> 
            </Col>
            <Col className='col-6 d-flex justify-content-center align-items-center'>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Can I submit more than one design?</Accordion.Header>
        <Accordion.Body>
        Yes, participants are welcome to submit multiple designs, but each must be unique.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are there any age restrictions for participation?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="">
        <Accordion.Header>How will the winning design be selected?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="">
        <Accordion.Header>When will the winner be announced?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="">
        <Accordion.Header>Do I retain the rights to my design after submission?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </Col>
            <Col className='col-3 d-flex justify-content-end align-items-end'>
            <Image src={curlboy}/>
            </Col> 
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Content1
