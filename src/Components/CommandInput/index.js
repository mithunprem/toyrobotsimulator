import React, { Component, Fragment } from 'react';
import './commandInput.scss';

export default class CommandModule extends Component {

  render() {
    return (
      <Fragment>
        <div className="m-3 command-input">
          <div className="command-input-title">
            Command module for the toy robot simulator
          </div>
          <div className="p-3 command-input-body">
            <div className="pb-3">Please enter your command here:</div>
            <div class="input-group">
              <input
                className="input" placeholder="Command"
                type="text" name="command"
              />
              <button className="ml-2 submit-button" size="sm"
                aria-label="Submit Command" onClick={this.submitCommand}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
