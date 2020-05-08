import React from 'react';
import './testimonial.scss';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Dp from '../images/dp.png';

function Testimonial() {
    return (
        <div className="testimonial-wrapper" id="testimonials">
            <h1 className="text-center">
                Testimonials
            </h1>
            <Row className="testimonial text-center">
                <Col xs={10} sm={10} md={10} lg={8} xl={6} className="testimonial-col">
                    <div className="img-container">
                        <Image src={Dp} alt="test-image" fluid />
                    </div>
                    <p className="pt-3 ml-4">
                        " Laborum duis eiusmod ad exercitation. Nisi ex commodo ullamco consectetur
                        exercitation consectetur officia pariatur. Nisi deserunt tempor sit tempor
                        laboris sint dolore exercitation reprehenderit fugiat voluptate duis sint.
                        Consectetur aliqua Lorem aliquip adipisicing cillum irure est. Duis "
                        <p className="mt-2 mb-0">
                            <strong>Ankush</strong> | CEO
                        </p>
                    </p>
                </Col>
            </Row>
            <Row className="testimonial text-center">
                <Col xs={10} sm={10} md={10} lg={8} xl={6} className="testimonial-col">
                    <div className="img-container">
                        <Image src={Dp} alt="test-image" fluid />
                    </div>
                    <p className="pt-3 ml-4">
                        " Laborum duis eiusmod ad exercitation. Nisi ex commodo ullamco consectetur
                        exercitation consectetur officia pariatur. Nisi deserunt tempor sit tempor
                        laboris sint dolore exercitation reprehenderit fugiat voluptate duis sint.
                        Consectetur aliqua Lorem aliquip adipisicing cillum irure est. Duis "
                        <p className="mt-2 mb-0">
                            <strong>Ankush</strong> | CEO
                        </p>
                    </p>
                </Col>
            </Row>
            <Row className="testimonial text-center">
                <Col xs={10} sm={10} md={10} lg={8} xl={6} className="testimonial-col">
                    <div className="img-container">
                        <Image src={Dp} alt="test-image" fluid />
                    </div>
                    <p className="pt-3 ml-4">
                        " Laborum duis eiusmod ad exercitation. Nisi ex commodo ullamco consectetur
                        exercitation consectetur officia pariatur. Nisi deserunt tempor sit tempor
                        laboris sint dolore exercitation reprehenderit fugiat voluptate duis sint.
                        Consectetur aliqua Lorem aliquip adipisicing cillum irure est. Duis "
                        <p className="mt-2 mb-0">
                            <strong>Ankush</strong> | CEO
                        </p>
                    </p>
                </Col>
            </Row>
            <Row className="testimonial text-center">
                <Col xs={10} sm={10} md={10} lg={8} xl={6} className="testimonial-col">
                    <div className="img-container">
                        <Image src={Dp} alt="test-image" fluid />
                    </div>
                    <p className="pt-3 ml-4">
                        " Laborum duis eiusmod ad exercitation. Nisi ex commodo ullamco consectetur
                        exercitation consectetur officia pariatur. Nisi deserunt tempor sit tempor
                        laboris sint dolore exercitation reprehenderit fugiat voluptate duis sint.
                        Consectetur aliqua Lorem aliquip adipisicing cillum irure est. Duis "
                        <p className="mt-2 mb-0">
                            <strong>Ankush</strong> | CEO
                        </p>
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default Testimonial;