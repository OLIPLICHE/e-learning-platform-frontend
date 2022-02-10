import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import learning from '../images/learning.png';
import Enrolment from '../components/Enrolment';
import NavLeft from '../components/NavLeft';
import './enrolments.css';
import { getEnrolments } from '../redux/enrolments/enrolments';

function MyEnrolment() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const enrolments = useSelector((state) => state.enrolmentsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEnrolments());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="p-2 vis">
        <FontAwesomeIcon icon={faBars} onClick={handleShow} />
      </div>
      <div className="nav">
        <img src={learning} className="learning-logo" alt="learning Logo" />
        <NavLeft />
      </div>
      <div className="main">
        <h1>My enrolments</h1>
        {(enrolments.length === 0) ? (
          <h2 className="no-enrolment lh-lg mt-5 fs-4">
            Oh Oh!
            <br />
            You do not have a enrolment yet
            <br />
            Kindly enroll to a course on the&nbsp;
            <a href="/" className="text-danger">HOME</a>
            &nbsp;page
          </h2>
        )
          : (
            <h2>
              You are able to cancel the enrolment before 24 hours of the
              enrolment date
            </h2>
          )}
        ;

        <div className="enrolments">
          {enrolments && enrolments.map((enrolment) => (
            <Enrolment enrolment={enrolment} key={enrolment.id} />
          ))}
        </div>
        <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><img src={learning} className="learning-logo-m" alt="learning Hotel Logo" /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavLeft />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default MyEnrolment;
