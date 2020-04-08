import React from 'react';
import './contact.scss';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Dp from '../images/dp.png'

function Contact() {
    return (
        <div className="contact-wrapper">
            <h1 className="text-center">Get In Touch !</h1>
            <Row className="p-4">
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Form>
                        <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="Message">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Image src={Dp} alt="dp" fluid />
                </Col>
            </Row>
        </div>
    );
}

export default Contact;