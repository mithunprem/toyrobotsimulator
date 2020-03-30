import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setRobotInfo } from '../../store/actions/commandModule';
import CommandInput from '../../components/commandInput';
import Reports from '../reports';
import Instructions from '../../components/instructions';
import processCommand from '../../utils/commandProcessor';

const mapStateToProps = state => ({
  commandList: state.commandModule.commandList,
  robotPosition: state.commandModule.robotPosition,
  shouldReportRobotStatus: state.commandModule.shouldReportRobotStatus
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setRobotInfo,
  }, dispatch);

class CommandModule extends Component {

  executeCommand = command => {
    let { commandList, robotPosition, shouldReportRobotStatus, setRobotInfo } = this.props;

    ({ commandList, robotPosition, shouldReportRobotStatus }
      = processCommand(command, commandList, robotPosition));

    setRobotInfo(commandList, robotPosition, shouldReportRobotStatus);
  }

  render() {
    const { commandList, robotPosition, shouldReportRobotStatus } = this.props;

    return (
      <>
        <CommandInput executeCommand={this.executeCommand} />
        <hr />
        <Reports
          reportRobotStatus={shouldReportRobotStatus}
          robotPosition={robotPosition}
          commandList={commandList}
        />
        <Instructions />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandModule);
