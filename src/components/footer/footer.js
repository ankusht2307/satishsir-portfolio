import React from 'react';
import './footer.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import linkedIn from '../images/linkedIn.svg';
import github from '../images/github.svg';
import twitter from '../images/twitter.png';
import stack from '../images/stack.svg';

function Footer() {
    return (
        <div className="footer-wrapper">
            <Container className="icons-container">
                <Row className="icons-row">
                    <Col xs={2} sm={2} md={1} lg={1} xl={1}>
                        <a href="#">
                            <img src={linkedIn} alt="linkedIn-image" fluid />
                        </a>
                    </Col>
                    <Col xs={2} sm={2} md={1} lg={1} xl={1}>
                        <a href="#">
                            <img src={github} alt="github-image" fluid />
                        </a>
                    </Col>
                    <Col xs={2} sm={2} md={1} lg={1} xl={1}>
                        <a href="#">
                            <img src={twitter} alt="twitter-image" fluid />
                        </a>
                    </Col>
                    <Col xs={2} sm={2} md={1} lg={1} xl={1}>
                        <a href="#">
                            <img src={stack} alt="stackoverflow-image" fluid />
                        </a>
                    </Col>
                </Row>
                <Row className="links-row">
                    <Col xs={8} sm={2} md={2} lg={2} xl={2}>
                        <a href="#header" className="anchor">Home</a>
                    </Col>
                    <Col xs={8} sm={2} md={2} lg={2} xl={2}>
                        <a href="#services">Services</a>
                    </Col>
                    <Col xs={8} sm={2} md={2} lg={2} xl={2}>
                        <a href="#projects">Projects</a>
                    </Col>
                    <Col xs={8} sm={2} md={2} lg={2} xl={2}>
                        <a href="#testimonials">Testimonials</a>
                    </Col>
                    <Col xs={8} sm={2} md={2} lg={2} xl={2}>
                        <a href="#about">About</a>
                    </Col>
                    <Col xs={8} sm={2} md={2} lg={2} xl={2}>
                        <a href="#contact">Contact</a>
                    </Col>
                </Row>
                <Row className="copyrights-row">
                    <Col xs={8} sm={6}>
                        <strong>&copy; 2020 Satish Pandey</strong>
                    </Col>
                    <Col xs={8} sm={6}>
                        <a href="#">Resources</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;