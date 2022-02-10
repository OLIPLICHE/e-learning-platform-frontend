import React from 'react';
import course from '../images/course.jpg';
import NavLeft from '../components/NavLeft';
import Enrolment from '../components/Enrolment';

function MyEnrolment() {
    const enrolments = [1, 2, 3, 4, 5];
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
            <Enrolment key={enrolment} />
          ))}
        </div>
        </div>
      </div>
    );
  }

  export default MyEnrolment;