import React from 'react';
import PropTypes from 'prop-types';

function Enrolment(props) {
  const { enrolment } = props;
  return (
    <div className="enrolment">
      <div className="col-1">
        <div className="check-in">
          <h3>Review</h3>
          <span>{enrolment.review}</span>
        </div>
        <div className="check-out">
          <h3>Raiting</h3>
          <span>{enrolment.raiting}</span>
        </div>
      </div>
      <div className="col-2">
        <div className="course-id">
          <h3>course-id:</h3>
          <span>
            №
            {enrolment.id}
          </span>
        </div>
        <button type="button" className="btn btn-danger">
          Cancel
        </button>
      </div>
    </div>
  );
}

Enrolment.propTypes = {
  enrolment: PropTypes.instanceOf(Object).isRequired,
};
export default Enrolment;
