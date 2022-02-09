import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import image from '../assets/img/python.png';

function CourseItem() {
  return (
    <Container className="course-container">
      <Row>
        <Col>
          <Image className="course-img" src={image} alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Course number</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            facilis quidem voluptatem non doloribus voluptatum. Itaque earum,
            recusandae voluptatibus est facere id explicabo officiis dolores eum
            a doloremque suscipit esse.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseItem;