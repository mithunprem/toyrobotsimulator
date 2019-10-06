import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

RobotPositionReport.propTypes = {
  robotPosition: PropTypes.object
}

export default RobotPositionReport;
