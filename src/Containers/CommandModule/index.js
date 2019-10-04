import React, { Component, Fragment } from 'react';
import CommandInput from '../../Components/CommandInput';
import CommandList from '../../Components/CommandList';
import Report from '../../Components/Report';
import Button from '../../Components/Button';
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

  resetRobot = () => {
    this.setState({
      commandList: [],
      robotPosition: {
        x: -1,
        y: -1,
        direction: ''
      },
      shouldReportRobotStatus: false
    })
  }

  render() {
    const { commandList, robotPosition, shouldReportRobotStatus } = this.state;

    return (
      <Fragment>
        <div className="command-module-wrapper">
          <CommandInput executeCommand={this.executeCommand} />
          {
            shouldReportRobotStatus ? <Report robotPosition={robotPosition} /> : ''
          }
        </div>
        <hr />
        {
          (commandList.length > 0) ? (
            <Fragment>
              <Button className="ml-3 mb-3 btn btn-light"
                  size="sm" label="Reset the Robot" onClick={this.resetRobot} />
              <CommandList commandList={commandList} />
            </Fragment>
          ) : ''
        }
      </Fragment>
    );
  }
}
