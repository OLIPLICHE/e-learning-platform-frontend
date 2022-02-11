import React, { useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './createCourse.css';
import {
  Container, Form, Button, Offcanvas,
} from 'react-bootstrap';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { addCourse } from '../redux/courses/courses';
import NavLeft from '../components/NavLeft';
import learning from '../images/learning.png';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, '*titles must have at least 2 characters')
    .max(50, '*titles can\'t be longer than 50 characters')
    .required('*title is required'),

  city: Yup.string()
    .min(2, '*City must have at least 2 characters')
    .max(25, '*City can\'t be longer than 25 characters')
    .required('*City is required'),

  price: Yup.number()
    .min(10, '*price must be $10 or greater')
    .required('*price is required'),

  level: Yup.string()
    .required('*Course Type is required'),

  description: Yup.string()
    .required('*Description is required'),

  picture: Yup.string()
    .required('*Picture is required'),
});

const CreateCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="form-container">
      <div className="p-2 vis">
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleShow}
          className="text-white"
        />
      </div>
      <div className="nav pt-10">
        <img src={learning} className="learning-logo" alt="learning Logo" />
        <NavLeft />
      </div>
      <Container className="my_container">
        <Formik
          initialValues={{
            title: '',
            city: '',
            price: 0,
            level: '',
            description: '',
            picture: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            dispatch(addCourse(values));
            setSubmitting(false);
            resetForm();
            setTimeout(() => {
              navigate('/');
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
            <Form
              onSubmit={handleSubmit}
              className="mx-auto row row-cols-1 row-cols-lg-2 bg-white p-4 d-flex justify-content-center align-items-center form"
            >
              <Form.Group className="col mb-3" controlId="formBasicName">
                <Form.Label>What is course Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  className={touched.title && errors.title ? 'error' : null}
                />
                {touched.title && errors.title ? (
                  <div className="error-message">{errors.title}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="col mb-3" controlId="formBasicCity">
                <Form.Label>What is City</Form.Label>
                <Form.Select
                  aria-label="Select Hotel City Field"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  className={touched.city && errors.city ? 'error' : null}
                >
                  <option>Select Hotel City</option>
                  <option value="Lusaka">Lusaka</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Morocco">Morocco</option>
                </Form.Select>
                {touched.city && errors.city ? (
                  <div className="error-message">{errors.city}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="col mb-3" controlId="formBasicprice">
                <Form.Label>What is price($)</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  className={touched.price && errors.price ? 'error' : null}
                />
                {touched.price && errors.price ? (
                  <div className="error-message">{errors.price}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="col mb-3" controlId="formBasicRoomType">
                <Form.Label>Course Level</Form.Label>
                <Form.Select
                  aria-label="Select Course Level Field"
                  name="level"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.level}
                  className={
                    touched.level && errors.level ? 'error' : null
                  }
                >
                  <option>What is course level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Middle">Middle</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </Form.Select>

                {touched.level && errors.level ? (
                  <div className="error-message">{errors.level}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="col mb-3" controlId="formBasicdescription">
                <Form.Label>Add course description</Form.Label>
                <Form.Select
                  aria-label="Select Amenity Field"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  className={
                    touched.description && errors.description ? 'error' : null
                  }
                >
                  <option>What is decribe course</option>
                  <option value="Ruby on rails capstone">
                    Ruby on rails capstone
                  </option>
                  <option value="Javascript module">Javascript module</option>
                  <option value="React capstoe">
                    React capstoe
                  </option>
                </Form.Select>

                {touched.description && errors.description ? (
                  <div className="error-message">{errors.description}</div>
                ) : null}
              </Form.Group>

              <Form.Group controlId="formBasicFile" className="col mb-3">
                <Form.Label>Add Cover</Form.Label>
                <Form.Control
                  type="text"
                  name="picture"
                  placeholder="Add an image URL"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.picture}
                  className={touched.picture && errors.picture ? 'error' : null}
                />
                {touched.picture && errors.picture ? (
                  <div className="error-message">{errors.picture}</div>
                ) : null}
              </Form.Group>

              <div className="w-md-75 mx-auto d-flex justify-content-center align-items-center mt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-50 mx-auto room-btn"
                >
                  Add Course
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
      <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={learning} className="learning-logo" alt="learning Logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavLeft className="text-black" />
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
};

export default CreateCourse;
