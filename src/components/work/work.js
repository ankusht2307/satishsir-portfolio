import React from 'react';
import './work.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import webhook from '../images/webhook.png';

function Work() {

    return (
        <div className="work-wrapper">
            <Container fluid className="work-container">
                <Row className="work_heading">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <h2>Projects!!</h2>
                    </Col>
                </Row>
                <Row className="work_content justify-content-center">
                    <Col xs={10} sm={3} md={2} lg={2} xl={2} className="work-type">
                        <div>
                            <Image src={webhook} alt="bg" fluid />
                            <a href="#">
                                <div className="overlay">
                                    <p className="link"></p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col xs={10} sm={3} md={2} lg={2} xl={2} className="work-type">
                        <div>
                            <Image src={webhook} alt="bg" fluid />
                            <a href="#">
                                <div className="overlay">
                                    <p className="link"></p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col xs={10} sm={3} md={2} lg={2} xl={2} className="work-type">
                        <div>
                            <Image src={webhook} alt="bg" fluid />
                            <a href="#">
                                <div className="overlay">
                                    <p className="link"></p>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="work_content justify-content-center">
                    <Col xs={10} sm={3} md={2} lg={2} xl={2} className="work-type">
                        <div>
                            <Image src={webhook} alt="bg" fluid />
                            <a href="#">
                                <div className="overlay">
                                    <p className="link"></p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col xs={10} sm={3} md={2} lg={2} xl={2} className="work-type">
                        <div>
                            <Image src={webhook} alt="bg" fluid />
                            <a href="#">
                                <div className="overlay">
                                    <p className="link"></p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col xs={10} sm={3} md={2} lg={2} xl={2} className="work-type">
                        <div>
                            <Image src={webhook} alt="bg" fluid />
                            <a href="#">
                                <div className="overlay">
                                    <p className="link"></p>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Work;