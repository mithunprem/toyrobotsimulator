import React, { Component, Fragment } from 'react';
import Input from '../Input';
import SubmitButton from '../SubmitButton';
import './commandInput.scss';

export default class CommandModule extends Component {

  state = {
    command: ''
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ command: value });
  }


  submitCommand = () => {
    console.log(this.state.command);
  }

  render() {
    const { command } = this.state;

    return (
      <Fragment>
        <div className="m-3 command-input-wrapper">
          <div className="command-input-title">
            Command module for the toy robot simulator
          </div>
          <div className="p-3 command-input-body">
            <Input
              label="Please enter your command here:" placeholder="Command"
              className={'command-input'} value={command} onChange={this.handleChange} />
            <SubmitButton size="sm" onClick={this.submitCommand} label="Submit" />
          </div>
        </div>
      </Fragment>
    );
  }
}
