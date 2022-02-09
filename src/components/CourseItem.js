/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const CourseItem = ({ course }) => {
  const {
    title, city, price, description, level, picture,
  } = course;
  return (
    <Container className="course-item">
      <Row>
        <Col>
          <Image className="course-image" src={image} alt="the course" />
        </Col>
      </Row>
      <Row>
        <Col>
          {
            title && <h2>{title}</h2>
          }
        </Col>
      </Row>
      <Row>
        <Col>
          {
            city && <h3>{city}</h3>
          }
          {
            price && (
            <h3>
              $
              {' '}
              {price}
            </h3>
            )
          }
          {
            description && <h3>{description}</h3>
          }
          {
            level && <h3>{level}</h3>
          }
          {
            picture && <Image className="course-image" src={picture} alt="the course" />
          }
        </Col>
      </Row>
    </Container>
  );
};

CourseItem.propTypes = {
  course: PropTypes.instanceOf(Object).isRequired,
};

export default CourseItem;
