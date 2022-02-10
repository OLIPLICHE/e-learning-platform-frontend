import { React, useState, useEffect } from 'react';
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
        <div className="p-2 vis">
          <FontAwesomeIcon icon={faBars} onClick={handleShow} />
        </div>
        <div className="home">
          <div className="nav">
            <img src={learning} className="learning-logo" alt="learning Hotel Logo" />
            <NavLeft />
          </div>
          <div className="main">
            <h1>Elearning course</h1>
            {courses.length === 0 ? (
              <h2>Please create a course</h2>
            ) : (
              <h2>Please select a course for enrolment</h2>
            )}
            <div className="courses">
              {courses && (
                courses.map((course) => (
                  <CourseItem course={course} key={course.id} courses={courses} />
                )))}
            </div>
          </div>
        </div>
      </div>
      <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={learning} className="learning-logo-m" alt="learning Hotel Logo" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavLeft className="text-black" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Home;
