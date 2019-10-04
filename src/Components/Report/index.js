import React, { Fragment } from 'react';

const Report = ({ robotPosition }) => {

  const { x, y, direction } = robotPosition;
  return (
    <Fragment>
      <div className="report">
        <span className="ml-3">The current position is : {x},{y},{direction.toUpperCase()}</span>
      </div>
    </Fragment>
  );
}

export default Report;
