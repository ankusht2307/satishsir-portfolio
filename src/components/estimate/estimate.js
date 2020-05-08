import React from 'react';
import './estimate.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cloud from '../images/Frame.svg';
import { Button } from 'react-bootstrap';

function Estimate() {

    return (
        <div className="estimate-wrapper">
            <Container fluid>
                <Row className="row-container">
                    <Col xs={12} sm={12} md={7} lg={7} xl={7} className="img-column">
                        <Image src={cloud} alt="estimate-image" fluid />
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} xl={5} className="text-center text-column">
                        <div>
                            <h2>Have a Project on your mind ?</h2>
                            <a href="#contact">
                                <Button variant="outline-danger" className="download-btn-2">Get An Estimate !</Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Estimate;