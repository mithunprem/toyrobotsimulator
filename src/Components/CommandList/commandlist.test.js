import React from 'react';
import { create } from 'react-test-renderer';
import CommandList from '../../Components/CommandList';

describe("CommandList", () => {
  const commandListData = [ 'Place 0,0,north', 'move', 'report'];
  test("should render without throwing an error", () => {
    const commandList = create(<CommandList commandList={commandListData}/> ).toJSON()
    expect(commandList).toMatchSnapshot()
  });
});
