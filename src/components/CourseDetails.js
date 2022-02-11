import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import './courseDetails.css';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLeft from './NavLeft';
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
      <section className="displaycourse">
        <div className="nav pt-10">
          <h1 className="brand">Elearning</h1>
          <NavLeft />
        </div>
        <ul>
          {course && course.map((single) => (
            <li key={single.id}>
              <div className="details marginFive leftMargin">
                <div className="displayTwo">
                  <img className="courseImage" src={single.picture} alt="hotel course" />
                </div>
                <div className="displayThree container top-0 info-table">
                  <div className="name-city float-right text-right">
                    <h2 className="fw-600">{single.name}</h2>
                    <p>{single.city}</p>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>course Number</th>
                        <td>{single.id}</td>
                      </tr>
                      <tr>
                        <th>course Type</th>
                        <td>{single.course_type}</td>
                      </tr>
                      <tr>
                        <th>Amenities</th>
                        <td>{single.amenities}</td>
                      </tr>
                      <tr>
                        <th>Rate</th>
                        <td>
                          $
                          {single.rate}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex flex-row button-text justify-around">
                    <button type="button" className="buttonConfig upperClass" onClick={() => handleClick(single.id)}>
                      <h3>Delete course</h3>
                    </button>
                    <NavLink to="/add_enrolment" exact="true">
                      <button type="button" onClick={() => handleId(single.id)} className="buttonConfig upperClass">
                        <h3>Reserve A course</h3>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1 className="brand">Elearning platform</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavLeft className="text-black" />
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
};

export default CourseDetails;
