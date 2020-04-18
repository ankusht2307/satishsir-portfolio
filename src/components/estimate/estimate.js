import React from 'react';
import './estimate.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cloud from '../images/Fr.png';

function Estimate() {

    return (
        <div className="estimate-wrapper">
            <Container fluid className="estimate-container">
                <Row className="row-container">   
                    <Col xs={11} sm={11} md={7} lg={7} xl={7} className="text-center img">
                        <Image src={cloud} alt="bg" fluid className="estimate_img" />
                    </Col>
                    <Col xs={11} sm={11} md={5} lg={5} xl={5} className="text-center text">
                        <div>
                            <h2>Have a Project on your mind ?</h2>
                            <h3>Get An Estimate !</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Estimate;