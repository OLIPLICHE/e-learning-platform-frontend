import React from 'react';

function Enrolment() {
    return (
        <div className="enrolment">
          <div className="col-1">
            <div className="check-in">
              <h3>Review</h3>
              <span>GGG</span>
            </div>
            <div className="check-out">
              <h3>Raiting</h3>
              <span>GGG</span>
            </div>
          </div>
          <div className="col-2">
            <div className="course-id">
              <h3>course-id:</h3>
              <span>1258N</span>
            </div>
            <button type="button" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </div>
      );
}

export default Enrolment;