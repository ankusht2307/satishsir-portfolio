import React from 'react';
import './work.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cloud from '../images/cloud.png';
import web from '../images/web.png';
import mobile from '../images/mobile.png';
import hook from '../images/webhook.png';

function Work() {

    return (
        <div className="work-wrapper">
            <Container fluid className="work-container">
                <Row className="work_heading">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <h2>Areas Of Expertise</h2>
                    </Col>
                </Row>
                <Row className="work_content">
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="work_type">
                        <div>
                            <div>
                                <Image src={cloud} alt="bg" fluid />
                            </div>
                            <h3>Cloud</h3>
                            <p>
                                Consectetur ex sunt irure dolor.
                                0Laborum duis mollit deserunt ut dolor
                                occaecat consequat in sint aliquip eu et
                                officia elit. Quis laborum dolor esse
                                adipisicing magna eu proident ut qui
                                tempor veniam cupidatat ut. Nulla
                                commodo mollit ea commodo qui
                                voluptateu occaecat consequat.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="work_type">
                        <div>
                            <div>
                                <Image src={web} alt="bg" fluid />
                            </div>
                            <h3>Web Apps</h3>
                            <p>
                                Consectetur ex sunt irure dolor.
                                0Laborum duis mollit deserunt ut dolor
                                occaecat consequat in sint aliquip eu et
                                officia elit. Quis laborum dolor esse
                                adipisicing magna eu proident ut qui
                                tempor veniam cupidatat ut. Nulla
                                commodo mollit ea commodo qui
                                voluptateu occaecat consequat.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="work_type">
                        <div>
                            <div>
                                <Image src={mobile} alt="bg" fluid />
                            </div>
                            <h3>Mobile Apps</h3>
                            <p>
                                Consectetur ex sunt irure dolor.
                                0Laborum duis mollit deserunt ut dolor
                                occaecat consequat in sint aliquip eu et
                                officia elit. Quis laborum dolor esse
                                adipisicing magna eu proident ut qui
                                tempor veniam cupidatat ut. Nulla
                                commodo mollit ea commodo qui
                                voluptateu occaecat consequat.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="exp_content">
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="work_type">
                        <div>
                            <div>
                                <Image src={cloud} alt="bg" fluid />
                            </div>
                            <h3>Cloud</h3>
                            <p>
                                Consectetur ex sunt irure dolor.
                                0Laborum duis mollit deserunt ut dolor
                                occaecat consequat in sint aliquip eu et
                                officia elit. Quis laborum dolor esse
                                adipisicing magna eu proident ut qui
                                tempor veniam cupidatat ut. Nulla
                                commodo mollit ea commodo qui
                                voluptateu occaecat consequat.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="work_type">
                        <div>
                            <div>
                                <Image src={web} alt="bg" fluid />
                            </div>
                            <h3>Web Apps</h3>
                            <p>
                                Consectetur ex sunt irure dolor.
                                0Laborum duis mollit deserunt ut dolor
                                occaecat consequat in sint aliquip eu et
                                officia elit. Quis laborum dolor esse
                                adipisicing magna eu proident ut qui
                                tempor veniam cupidatat ut. Nulla
                                commodo mollit ea commodo qui
                                voluptateu occaecat consequat.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="work_type">
                        <div>
                            <div>
                                <Image src={mobile} alt="bg" fluid />
                            </div>
                            <h3>Mobile Apps</h3>
                            <p>
                                Consectetur ex sunt irure dolor.
                                0Laborum duis mollit deserunt ut dolor
                                occaecat consequat in sint aliquip eu et
                                officia elit. Quis laborum dolor esse
                                adipisicing magna eu proident ut qui
                                tempor veniam cupidatat ut. Nulla
                                commodo mollit ea commodo qui
                                voluptateu occaecat consequat.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Work;