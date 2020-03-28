import React from 'react';
import { create } from 'react-test-renderer';
import Reports from '../components/reports';

describe("Reports", () => {
  const robotPosition = { x:1, y:1, direction:'NORTH' };
  const commandList = [ 'Place 0,0,north', 'move', 'report'];
  test("should render nothing on load of the page", () => {
    const report = create(
      <Reports commandList={[]}/>
  ).toJSON()
    expect(report).toMatchSnapshot()
  });

  test("should render the robotPosition when it is passed as a prop", () => {
    const report = create(
      <Reports
        commandList={[]}
        robotPosition={robotPosition}
        reportRobotStatus={true}/>
  ).toJSON()
    expect(report).toMatchSnapshot()
  });

  test("should render the commandList throwing an error", () => {
    const report = create(
      <Reports
        commandList={commandList} />
  ).toJSON()
    expect(report).toMatchSnapshot()
  });
});
