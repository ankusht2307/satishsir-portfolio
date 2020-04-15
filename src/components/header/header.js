import React from 'react';
import './header.scss';
import { Row, Col, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Dp from '../images/sir.png';

function Header() {

    return (
        <div className="header">
            <Row className="header-content">
                <Col xs={11} sm={10} md={5} lg={5} xl={5} className="text">
                    <div>
                        <h1 className="h-1">Hi I am</h1>
                        <h2 className="h-2">Satish pandey</h2>
                        <h3 className="h-3">A Professional Full Stack Developer</h3>
                        <div>
                            <Button variant="outline-danger" className="download-btn">MY SERVICES</Button>
                            <Button variant="outline-danger" className="download-btn">RECENT WORKS</Button>
                        </div>
                    </div>
                </Col>
                <Col  md={6} lg={5} xl={6} className="display-pic">
                    <Image src={Dp} fluid></Image>
                </Col>
            </Row>
        </div>
    );
}

export default Header;