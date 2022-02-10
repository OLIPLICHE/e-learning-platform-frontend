import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../courseDetails.css';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLeft from './NavLeft';
import course from '../images/course.jpg';

const CourseDetails = () => {
  const courses = useSelector((state) => state.coursesReducer);
  const { id } = useParams();

  const course = courses.filter((r) => r.id === parseInt(id, 10));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <main className="contain">
      <div className="vis">
        <FontAwesomeIcon icon={faBars} onClick={handleShow} />
      </div>
      <section className="displayCourse">
        <div className="nav">
          <img src={course} className="course-logo" alt="" />
          <NavLeft />
        </div>
        <ul>
          {course && course.map((single) => (
            <li key={single.id}>
              <div className="details marginFive leftMargin">
                <div className="displayTwo">
                  <img className="courseImage" src={single.picture} alt="course" />
                </div>
                <div className="displayThree">
                  <h1 className="upperCase">{single.title}</h1>
                  <p>
                    City:
                    {single.city}
                  </p>
                  <p>
                    course price: $z
                    {single.price}
                  </p>
                  <p>
                    course price:
                    {single.level}
                  </p>
                  <p>
                    course description:
                    {single.description}
                  </p>
                  <button type="button" className="buttonConfig">
                    Add Enrolment
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </section>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Learning</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
};
export default CourseDetails;