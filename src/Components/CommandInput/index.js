import React, { Component, Fragment } from 'react';
import Input from '../Input';
import Button from '../Button';
import validateCommand from '../../Utils/commandValidator'
import './commandInput.scss';

export default class CommandModule extends Component {

  state = {
    command: '',
    commandError: false
  }

  handleChange = (event) => {
    this.setState({
      command: event.target.value,
      commandError: false
    });
  }

  submitCommand = () => {
    const { command } = this.state;
    const isValidCommand = validateCommand(command);

    if (isValidCommand) {
      this.setState({ command: '' });
      this.props.executeCommand(command);
    } else {
      this.setState({ commandError: !isValidCommand });
    }
  }

  render() {
    const { command, commandError } = this.state;
    const inputErrorClassName = commandError ? 'has-error' : '';

    return (
      <Fragment>
        <div className="m-3 command-input-wrapper">
          <div className="command-input-title">
            Command module for the toy robot simulator
          </div>
          <div className="p-3 command-input-body">
            <Input
              label="Please enter your command here:" placeholder="Command"
              className={`command-input ${inputErrorClassName}`}
              value={command} onChange={this.handleChange} />
            <Button
              className="ml-3 btn btn-secondary btn-sm" label="Execute Command"
              onClick={this.submitCommand} disabled={commandError} />
          </div>
        </div>
      </Fragment>
    );
  }
}
