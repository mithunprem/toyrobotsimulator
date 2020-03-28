import React from 'react';
import CommandList from '../../components/commandList';
import RobotPositionReport from '../../components/robotPositionReport';
import PropTypes from 'prop-types';

const Reports = ({ reportRobotStatus, robotPosition, commandList }) => {

  return (
    <div className="reports m-3">
      { reportRobotStatus ?
        <RobotPositionReport robotPosition={robotPosition} /> : ''
      }
      { commandList.length > 0 ?
        <CommandList commandList={commandList} /> : ''
      }
    </div>
  );
}

Reports.propTypes = {
  reportRobotStatus: PropTypes.bool,
  robotPosition: PropTypes.object,
  commandList: PropTypes.array
}

export default Reports;
