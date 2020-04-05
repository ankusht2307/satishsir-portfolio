import React from 'react';
import './estimate.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cloud from '../images/cloud.png';
import web from '../images/web.png';
import mobile from '../images/mobile.png';
import hook from '../images/webhook.png';

function Estimate() {

    return (
        <div className="estimate-wrapper">
            <Container fluid className="estimate-container">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} className="text-center">
                        <div>
                            <h2>Get An Estimate</h2>
                            <h3>Have a Project on your mind?</h3>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center">
                        <Image src={cloud} alt="bg" fluid className="estimate_img" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Estimate;