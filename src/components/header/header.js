import React from 'react';
import './header.scss';
import { Row, Col, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Dp from '../images/sir.png';

function Header() {

    return (
        <div className="header" id="header">
            <Row className="header-content">
                <Col xs={11} sm={10} md={5} lg={5} xl={5} className="text">
                    <div>
                        <h1 className="h-1">Hi I am</h1>
                        <h2 className="h-2">Satish pandey</h2>
                        <h3 className="h-3">A Professional Full Stack Developer</h3>
                        <div>
                            <a href="#services">
                                <Button variant="outline-danger" className="download-btn-1">MY SERVICES</Button>
                            </a>
                            <a href="#projects">
                                <Button variant="outline-danger" className="download-btn-2">RECENT WORKS</Button>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={5} xl={6} className="display-pic">
                    <Image src={Dp} fluid></Image>
                </Col>
            </Row>
        </div>
    );
}

export default Header;