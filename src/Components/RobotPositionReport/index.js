import React, { Fragment } from 'react';

const RobotPositionReport = ({ robotPosition }) => {

  const { x, y, direction } = robotPosition;

  return (
    <Fragment>
      <div className="report alert alert-info">
        <span>Robot's current position is: {x}, {y}, {direction.toUpperCase()}</span>
      </div>
    </Fragment>
  );
}

export default RobotPositionReport;
