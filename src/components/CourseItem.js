/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import course from '../images/course.jpg';

const CourseItem = ({ course, courses }) => {
  const {
    title, city, price, level, description, id,
  } = course;

  return (
    <Container className="course-item">
      <Row>
        <Col>
          <Image className="course-image" src={course} alt="course" />
        </Col>
      </Row>
      <Row>
        <Col>
          {title && (
            <h2>
              title:
              {' '}
              {title}
            </h2>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {city && (
            <h3>
              City Location:
              {' '}
              {city}
            </h3>
          )}
          {price && (
            <h3>
              price:
              {' '}
              $
              {price}
            </h3>
          )}
          {level && (
            <h3>
              level:
              {' '}
              {level}
            </h3>
          )}
          {description && (
            <h3>
              description:
              {' '}
              {description}
            </h3>
          )}
          {id && (
            <Link to={{ pathname: 'course_details/' }}>Click me</Link>
          )}
        </Col>
      </Row>
    </Container>
  );
};

CourseItem.propTypes = {
  course: PropTypes.instanceOf(Object).isRequired,
  courses: PropTypes.instanceOf(Object).isRequired,
};

export default CourseItem;
