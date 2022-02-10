import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLeft from './NavLeft';
import Image from '../images/course.jpg';
import learning from '../images/learning.png';

const CourseDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const coursesDb = {
    title: 'Course',
    city: 'test-city',
    price: '100',
    description: 'Course description',
    level: 'Beginner',
  };
  return (
    <main className="contain">
      <div className="vis">
        <FontAwesomeIcon icon={faBars} onClick={handleShow} />
      </div>
      <section className="displaycourse">
        <div className="nav">
          <img src={learning} className="learning-logo" alt="" />
          <NavLeft />
        </div>
        <div className="details marginFive leftMargin">
          <div className="displayTwo">
            <img className="courseImage" src={Image} alt="hotel course" />
          </div>
          <div className="displayThree">
            <h1 className="upperCase">{coursesDb.name}</h1>
            <p>
              City:
              {coursesDb.city}
            </p>
            <p>
              course price: $z
              {coursesDb.price}
            </p>
            <p>
              description
              {coursesDb.description}
            </p>
            <ul>
              {coursesDb.levels.map((level) => (
                <li key={level}>{level}</li>
              ))}
            </ul>
            <button type="button" className="buttonConfig">
              Add enrolments
            </button>
          </div>
        </div>
      </section>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>learning</Offcanvas.Title>
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
