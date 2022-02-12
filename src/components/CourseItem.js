import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const CourseItem = ({ course }) => {
  const {
    name, id, picture,
  } = course;

  return (
    <Container className="course-item">
      <Row>
        <Col>
          <Image className="course-image" src={picture} alt="Course course" />
        </Col>
      </Row>
      <Row>
        <Col>
          {name && (
            <h2 className="CourseName">
              {name}
            </h2>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {id && (
            <Link to={{ pathname: `course_details/${id}` }} className="btn btn-primary upperCase mb-2">See course</Link>
          )}
        </Col>
      </Row>
    </Container>
  );
};

CourseItem.propTypes = {
  course: PropTypes.instanceOf(Object).isRequired,
};

export default CourseItem;
