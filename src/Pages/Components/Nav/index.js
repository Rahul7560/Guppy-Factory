import React from 'react'
import { Container, Row } from 'reactstrap'
import './nav.css'
import Button from './Items/Button'

function Nav() {
    return (
        <div className="nav_Main" >
            <div className="nav_begin">
                <Row className="nav_Row mx-5 ">
                    <div>
                        <img src="https://livedemo00.template-help.com/wt_52857/img/logo.png" alr="logo" />




                    </div>
                    <div>
                        <Row className="nav_Row2">
                            <Button
                                title="HOME"
                                url="/"
                            />
                            <Button
                                title="ABOUT"
                                url="/" />
                            <Button
                                title="CONTACT"
                                url="/"
                            />
                            <Button
                                title="GALLERY"
                                url="/"
                            />


                        </Row>

                    </div>



                </Row>




            </div>


        </div>
    )
}

export default Nav
