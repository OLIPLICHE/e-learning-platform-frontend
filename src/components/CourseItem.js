import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import image from '../assets/img/python.png';

function CourseItem() {
  return (
    <Container className="course-item">
      <Row>
        <Col>
          <Image className="course-img" src={image} alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>course number</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="fs-6 text fw-light">
            zzzzzzzzzz
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseItem;
