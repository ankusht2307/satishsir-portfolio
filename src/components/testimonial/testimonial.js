import React from 'react';
import './testimonial.scss';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Dp from '../images/dp.png';

function Testimonial() {
    return (
        <div className="testimonial_wrapper">
            <h1 className="text-center">
                Testimonials
            </h1>
            <Row className="testimonial">
                <Col xs={3} sm={4} md={4} lg={4} xl={4} className="test_dp text-right">
                    <Image src={Dp} alt="test_image" fluid/>
                </Col>
                <Col xs={9} sm={8} md={8} lg={6} xl={6} className="test_content">
                    <p>
                        Laborum duis eiusmod ad exercitation. Nisi ex commodo ullamco consectetur
                        exercitation consectetur officia pariatur. Nisi deserunt tempor sit tempor
                        laboris sint dolore exercitation reprehenderit fugiat voluptate duis sint.
                        Consectetur aliqua Lorem aliquip adipisicing cillum irure est. Duis
                </p>
                </Col>
            </Row>
            <Row className="testimonial">
                <Col xs={3} sm={4} md={4} lg={4} xl={4} className="test_dp text-right">
                    <Image src={Dp} alt="test_image" fluid/>
                </Col>
                <Col xs={9} sm={8} md={8} lg={6} xl={6} className="test_content">
                    <p>
                        Laborum duis eiusmod ad exercitation. Nisi ex commodo ullamco consectetur
                        exercitation consectetur officia pariatur. Nisi deserunt tempor sit tempor
                        laboris sint dolore exercitation reprehenderit fugiat voluptate duis sint.
                        Consectetur aliqua Lorem aliquip adipisicing cillum irure est. Duis
                </p>
                </Col>
            </Row>
            <Row className="testimonial">
                <Col xs={3} sm={4} md={4} lg={4} xl={4} className="test_dp text-right">
                    <Image src={Dp} alt="test_image" fluid/>
                </Col>
                <Col xs={9} sm={8} md={8} lg={6} xl={6} className="test_content">
                    <p>
                        Laborum duis eiusmod ad exercitation. Nisi ex commodo ullamco consectetur
                        exercitation consectetur officia pariatur. Nisi deserunt tempor sit tempor
                        laboris sint dolore exercitation reprehenderit fugiat voluptate duis sint.
                        Consectetur aliqua Lorem aliquip adipisicing cillum irure est. Duis
                </p>
                </Col>
            </Row>
            <Row className="testimonial">
                <Col xs={3} sm={4} md={4} lg={4} xl={4} className="test_dp text-right">
                    <Image src={Dp} alt="test_image" fluid/>
                </Col>
                <Col xs={9} sm={8} md={8} lg={6} xl={6} className="test_content">
                    <p>
                        Laborum duis eiusmod ad exercitation. Nisi ex commodo ullamco consectetur
                        exercitation consectetur officia pariatur. Nisi deserunt tempor sit tempor
                        laboris sint dolore exercitation reprehenderit fugiat voluptate duis sint.
                        Consectetur aliqua Lorem aliquip adipisicing cillum irure est. Duis
                </p>
                </Col>
            </Row>
        </div>
    );
}

export default Testimonial;