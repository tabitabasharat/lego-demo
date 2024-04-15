import React from 'react'
import {Row,Col,Image,Container } from 'react-bootstrap'
import popup from "../../assets/Popup.png"

function PopUp() {
  return (
    <div>
      <Container>
        <Row>
            <Image src={popup}/>
        </Row>
      </Container>
    </div>
  )
}

export default PopUp
