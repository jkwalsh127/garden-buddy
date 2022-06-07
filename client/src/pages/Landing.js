import React from 'react';
import './styles/landing.css';
import { Row, Col } from 'react-bootstrap';

export default function Landing() {
    return (
        <>
            <h1 className='page-title'>Welcome to Garden Buddy!</h1>
            <Row>
                <Col xs={{ span: 10, offset: 1 }} md={{ span: 7, offset: 1 }}>
                    <p className="about-text">
                       Your one-stop-shop for all things gardening! 
                    </p>
                </Col>
        </Row>
        </>
    );
}
