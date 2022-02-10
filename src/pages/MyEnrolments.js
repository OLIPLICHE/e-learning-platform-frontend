import React from 'react';
import { useSelector } from 'react-redux';
import course from '../images/course.jpg';
import Enrolment from '../components/Enrolment';
import NavLeft from '../components/NavLeft';

function MyEnrolment() {
  const enrolments = useSelector((state) => state.enrolmentsReducer);
  return (
    <div className="home">
      <div className="nav">
        <img src={course} className="course-logo" alt="" />
        <NavLeft />
      </div>
      <div className="main">
        <h1>My Enrolments</h1>
        <h2>
          You are able to cancel the Enrolment before 24 hours of the
          Enrolment date
        </h2>
        <div className="enrolment">
          {enrolments.map((enrolment) => (
            <Enrolment enrolment={enrolment} key={enrolment.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyEnrolment;
