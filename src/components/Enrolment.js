import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteEnrolment } from '../redux/enrolments/enrolments';

function Enrolment(props) {
  const dispatch = useDispatch();
  const { enrolment } = props;

  return (
    <div className="enrolment">
      <div className="co1">
        <div className="check-in tex">
          <h3>review</h3>
          <span>{enrolment.review}</span>
        </div>
        <div className="check-out tex">
          <h3>rating</h3>
          <span>{enrolment.raiting}</span>
        </div>
      </div>
      <div className="co2">
        <div className="course-id tex">
          <h3>course-id:</h3>

          <span>
            №
            {enrolment.course_id}
          </span>
        </div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => dispatch(deleteEnrolment(enrolment.id))}
        >
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
