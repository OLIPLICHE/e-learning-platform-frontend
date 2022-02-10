import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import { Form, Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createEnrolment } from '../redux/enrolments/enrolments';
import NavLeft from '../components/NavLeft';
import learning from '../images/learning.png';
import './addEnrolment.css';

const AddEnrolment = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseId = useSelector((state) => state.setIdReducer);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBack = () => navigate(-1);
  return (
    <div className="form-container1">
      <div className="p-2">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBack} className="text-white point" />
      </div>
      <div className="fullScreen">
        <div className="p-2 vis">
          <FontAwesomeIcon icon={faBars} onClick={handleShow} className="text-white" />
        </div>
        <div className="txtWrapper">
          <h1 className="upperCase txtWhite fs-1">Book a enrolment</h1>
          <p className="txtWhite">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            erat massa, accumsan a porta quis, faucibus et mi. Curabitur
            cursus nulla eu magna posuere, sit amet fringilla orci elementum.
          </p>

          <Formik
            initialValues={{
              review: '',
              raiting: '',
              course_id: courseId,
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              dispatch(createEnrolment(values));
              resetForm();
              setSubmitting(false);
              setTimeout(() => {
                navigate('/enrolments');
                window.location.reload(true);
              }, 1000);
            }}
          >

            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit} className="mx-auto row row-cols-2 mt-3 d-flex justify-content-center align-items-center">
                <Form.Group controlId="FormCheckIn">
                  <Form.Label>Check In</Form.Label>
                  <Form.Control
                    type="text"
                    name="review"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.review}
                    className="{touched.review && errors.review ? 'error' : null} form-radius"
                  />
                  {touched.review && errors.review ? (
                    <div className="error-message-white">{errors.review}</div>
                  ) : null}
                </Form.Group>

                <Form.Group controlId="FormCheckIn">
                  <Form.Label>Check Out</Form.Label>
                  <Form.Control
                    type="text"
                    name="raiting"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.raiting}
                    className="{touched.raiting && errors.raiting ? 'error' : null} form-radius"
                  />
                  {touched.raiting && errors.raiting ? (
                    <div className="error-message-white">{errors.raiting}</div>
                  ) : null}
                </Form.Group>

                <Button type="submit" disabled={isSubmitting} className="upperCase resBtn">
                  Enroll
                </Button>
              </Form>
            )}
          </Formik>
        </div>
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
  );
};

export default AddEnrolment;
