import React from 'react';
import CommandList from '../../Components/CommandList';
import RobotPositionReport from '../../Components/RobotPositionReport';
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
