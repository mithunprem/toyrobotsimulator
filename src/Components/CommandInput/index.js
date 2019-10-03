import React, { Fragment } from 'react';

function CommandModule() {
  return (
    <Fragment>
      <div className="command-module">
        <h4> This is the command module for the toy robot simulator</h4>
        <h5> Please enter your commands here. </h5>
        <input type="text" name="command"></input>
        <button name="submit-command">Submit command</button>
      </div>
    </Fragment>
  );
}

export default CommandModule;
