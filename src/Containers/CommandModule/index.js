import React, { Component, Fragment } from 'react';
import CommandInput from '../../Components/CommandInput';
import CommandList from '../../Components/CommandList';
import Report from '../../Components/Report';
import processCommand from '../../Utils/commandProcessor';
import './commandModule.scss';

export default class CommandModule extends Component {

  state = {
    commandList: [],
    robotPosition: {
      x: -1,
      y: -1,
      direction: ''
    },
    shouldReportRobotStatus: false
  }

  executeCommand = command => {
    let { commandList, robotPosition } = this.state;

    this.setState(
       processCommand(command, commandList, robotPosition)
    );
  }

  render() {
    const { commandList, robotPosition, shouldReportRobotStatus } = this.state;

    return (
      <Fragment>
        <div className="command-module-wrapper">
          <CommandInput executeCommand={this.executeCommand} />
        </div>
          {
            shouldReportRobotStatus ? <Report robotPosition={robotPosition} /> : ''
          }
          <hr />
        {
          (commandList.length > 0) ? (
            <Fragment>
              <CommandList commandList={commandList} />
            </Fragment>
          ) : ''
        }
      </Fragment>
    );
  }
}
