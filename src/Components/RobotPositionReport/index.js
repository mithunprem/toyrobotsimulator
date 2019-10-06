import React, { Fragment } from 'react';

const RobotPositionReport = ({ robotPosition }) => {

  const { x, y, direction } = robotPosition;
  return (
    <Fragment>
      <div className="report">
        <p className="ml-3">The current position is: {x}, {y}, {direction.toUpperCase()}</p>
      </div>
    </Fragment>
  );
}

export default RobotPositionReport;
