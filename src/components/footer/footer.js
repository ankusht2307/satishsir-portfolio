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
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedIn} alt="" fluid />
                        </a>
                    </Col>
                    <Col xs={2} sm={2} md={1} lg={1} xl={1}>
                        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="" fluid />
                        </a>
                    </Col>
                    <Col xs={2} sm={2} md={1} lg={1} xl={1}>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="" fluid />
                        </a>
                    </Col>
                    <Col xs={2} sm={2} md={1} lg={1} xl={1}>
                        <a href="https://www.stackoverflow.com/" target="_blank" rel="noopener noreferrer">
                            <img src={stack} alt="" fluid />
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
                        <a href="https://www.icons8.com/" target="_blank" rel="noopener noreferrer">Resources</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;