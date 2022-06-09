import React from 'react';
import './styles/landing.css';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';



export default function Landing() {
    return (
        <div>
            <h1 className='page-title'>Welcome to Garden Buddy!</h1>
            <Row>
                <Col xs={{ span: 10, offset: 2 }} md={{ span: 7, offset: 2 }}>
                    <p className="about-text">
                        Your one-stop-shop for all things gardening!
                    </p>
                </Col>
            </Row>
            <div className="buttonwrapper">
                <a href="/login" rel="noreferrer">
                    <Button id="button">Login</Button>
                </a>

                <a href="/signup" rel="noreferrer">
                    <Button id="button">Signup</Button>
                </a>
            </div>
        </div>
    );
}
