import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CourseItem from '../components/CourseItem';
import NavLeft from '../components/NavLeft';
import { getCourses } from '../redux/courses/courses';
import learning from '../images/learning.png';

const Home = () => {
  const courses = useSelector((state) => state.coursesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="Container">
        <div className="vis">
          <FontAwesomeIcon icon={faBars} onClick={handleShow} />
        </div>
        <div className="home">
          <div className="nav">
            <img src={learning} className="leaning-logo" alt="leaning Hotel Logo" />
            <NavLeft />
          </div>
          <div className="main">
            <h1>leaning&apos;s courses</h1>
            <h2>Please select a course for reservation</h2>
            <div className="courses">
              {courses && courses.map((course) => (
                <NavLink to="/course" exact="true" key={course.id}>
                  <CourseItem course={course} key={course.id} />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>leaning</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Home;
