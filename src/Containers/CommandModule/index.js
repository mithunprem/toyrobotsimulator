import React from 'react';

function CommandModule() {
  return (
    <div className="App">
      <h4> This is the command module for the toy robot simulator</h4>
      <h5> Please enter your commands here. </h5>
      <input type="text" name="command"></input>
    </div>
  );
}

export default CommandModule;
