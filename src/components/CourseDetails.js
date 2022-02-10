import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import './courseDetails.css';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLeft from './NavLeft';
import learning from '../images/learning.png';
import { deleteCourse } from '../redux/courses/courses';
import { setId } from '../redux/enrolments/setId';

const CourseDetails = () => {
  const courses = useSelector((state) => state.coursesReducer);
  const { id } = useParams();

  const course = courses.filter((r) => r.id === parseInt(id, 10));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    dispatch(deleteCourse(id));
    setTimeout(() => {
      navigate('/');
      window.location.reload(true);
    }, 1000);
  };

  const handleId = (id) => {
    dispatch(setId(id));
  };

  return (
    <main className="contain">
      <div className="p-2 vis">
        <FontAwesomeIcon icon={faBars} onClick={handleShow} />
      </div>
      <section className="displayCourse">
        <div className="nav">
          <img src={learning} className="learning-logo" alt="learning Logo" />
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
                  <p className="mb-2 badg-odd">
                    <span className="items">City: </span>
                    <span className="itemsValue">{single.city}</span>
                  </p>
                  <p className="mb-2 badg-even">
                    <span className="items">course price: </span>
                    <span className="itemsValue">
                      $
                      {single.price}
                    </span>
                  </p>
                  <p className="mb-2 badg-odd">
                    <span className="items">level: </span>
                    <span className="itemsValue">{single.level}</span>
                  </p>
                  <p className="mb-2 badg-even">
                    <span className="items">description: </span>
                    <span className="itemsValue">{single.description}</span>
                  </p>
                  <button type="button" className="buttonConfig upperClass" onClick={() => handleClick(single.id)}>
                    Delete Course
                  </button>
                  <NavLink to="/add_enrolment" exact="true">
                    <button type="button" onClick={() => handleId(single.id)} className="buttonConfig upperClass">
                      Enroll Course
                    </button>
                  </NavLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={learning} className="learning-logo-m" alt="Course Logo" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavLeft />
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
};

export default CourseDetails;
