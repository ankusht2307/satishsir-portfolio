import React from 'react';
import './contact.scss';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Dp from '../images/mailbox.svg'

function Contact() {
    return (
        <div className="contact-wrapper" id="contact">
            <h1 className="text-center">Get In Touch !</h1>
            <Row className="row-container">
                <Col xs={12} sm={12} md={7} lg={7} xl={7} className="form-column">
                    <Form className="form">
                        <Form.Group controlId="Name">
                            <Form.Control type="text" placeholder="Name" required/>
                            <Form.Label>Name</Form.Label>
                        </Form.Group>
                        <Form.Group controlId="Email">
                            <Form.Control type="email" placeholder="name@example.com" required/>
                            <Form.Label>Email address</Form.Label>
                        </Form.Group>
                        <Form.Group controlId="Message">
                            <Form.Control as="textarea" rows="3" placeholder="Type message here!!" required/>
                            <Form.Label>Message</Form.Label>
                        </Form.Group>
                        <Button variant="outline-danger" className="download-btn-1">Send</Button>
                    </Form>
                </Col>
                <Col md={5} lg={5} xl={5} className="mail-image text-center">
                    <Image src={Dp} alt="dp" fluid />
                </Col>
            </Row>
        </div>
    );
}

export default Contact;