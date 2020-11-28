import React from 'react'
import './card.css'
import { Row, Col } from 'reactstrap'
import fish1 from './fish1.png'
import fish2 from './fish2.png'

function card(props) {
    return (
        <div className="card_Main  ">

            <Row className=" rowmain w-100 mx-auto" >
                <Col sm className="p-0">
                    <img className="row_Card" src={props.img} alt="fish1" />

                </Col>
                <Col sm className=" carddetails p-0">
                    <h1> {props.fishname}</h1>
                    <div align="center">
                        <p>{props.para1}</p>

                        <button className="buttoncard px-5 py-2" src="#" > Learn More</button>

                    </div>



                </Col>
            </Row>
            <Row className=" rowmain mx-auto w-100">
                <Col sm className="carddetails p-0">
                    <h1> {props.fishname2}</h1>
                    <div align="center">
                        <p>{props.para2}</p>
                        <button className="buttoncard px-5 py-2" src="#" > Learn More</button>


                    </div>
                </Col>
                <Col sm className="p-0">
                    <img className="row_Card" src={props.img2} alt="fish1" />

                </Col>
            </Row>



        </div>
    )
}

export default card
