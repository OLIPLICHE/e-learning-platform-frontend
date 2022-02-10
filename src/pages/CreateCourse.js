import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import './createcourse.css';
import { Container, Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { addCourse } from '../redux/courses/courses';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*Names must have at least 2 characters')
    .max(50, '*Names can\'t be longer than 50 characters')
    .required('*Name is required'),

  city: Yup.string()
    .min(2, '*City must have at least 2 characters')
    .max(25, '*City can\'t be longer than 25 characters')
    .required('*City is required'),

  price: Yup.number()
    .min(10, '*price must be $10 or greater')
    .required('*price is required'),

  level: Yup.string()
    .required('*Course level  is required'),

  descriptions: Yup.string()
    .required('*Amenity is required'),

  picture: Yup.string()
    .required('*Picture is required'),
});

const CreateCourse = () => {
  const dispatch = useDispatch();
  return (
    <section className="form-container">
      <Container className="my_container">
        <Formik
          initialValues={{
            title: '',
            city: '',
            price: 0,
            level: '',
            descriptions: '',
            picture: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(addCourse(values));
            setSubmitting(true);
            resetForm();
            setSubmitting(false);
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
            <Form onSubmit={handleSubmit} className="mx-auto row row-cols-1 row-cols-lg-2 bg-white p-4 d-flex justify-content-center align-items-center">
              <Form.Group className="col mb-3" controlId="formBasicName">
                <Form.Label>Course Title</Form.Label>
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
                <Form.Label>City</Form.Label>
                <Form.Select
                  aria-label="Select course City Field"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  className={touched.city && errors.city ? 'error' : null}
                >
                  <option>Select Hotel City</option>
                  <option value="Abidjan">Abidjan</option>
                  <option value="Yamoussoukro">Yamoussoukro</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Accra">Accra</option>
                </Form.Select>
                {touched.city && errors.city ? (
                  <div className="error-message">{errors.city}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="col mb-3" controlId="formBasicPrice">
                <Form.Label>Price($)</Form.Label>
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

              <Form.Group className="col mb-3" controlId="formBasicCourseLevel">
                <Form.Label>Course level </Form.Label>
                <Form.Select
                  aria-label="Select Course level  Field"
                  name="level"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.level}
                  className={touched.level && errors.level ? 'error' : null}
                >
                  <option>Select Course level </option>
                  <option value="Single">Beginner</option>
                  <option value="Double">Middle</option>
                  <option value="Mini Suite">Advanced</option>
                </Form.Select>

                {touched.level && errors.level ? (
                  <div className="error-message">{errors.level}</div>
                ) : null}
              </Form.Group>

              <Form.Group controlId="formBasicDescriptions" className="col mb-3">
                <Form.Label>Choose An Amenity</Form.Label>
                <Form.Control
                  type="text"
                  name="descriptions"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  className={touched.description && errors.description ? 'error' : null}
                />
                {touched.description && errors.description ? (
                  <div className="error-message">{errors.description}</div>
                ) : null}
              </Form.Group>

              <Form.Group controlId="formBasicFile" className="col mb-3">
                <Form.Label>Choose An Image</Form.Label>
                <Form.Control
                  type="file"
                  name="picture"
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
                <Button type="submit" disabled={isSubmitting} className="bg-blue-600 w-50 mx-auto">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default CreateCourse;
