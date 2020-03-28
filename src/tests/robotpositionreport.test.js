import React from 'react';
import { create } from 'react-test-renderer';
import RobotPositionReport from '../Components/RobotPositionReport';

describe("RobotPositionReport", () => {
  const robotPosition = { x:1, y:1, direction:'NORTH' };
  test("should render without throwing an error", () => {
    const report = create(<RobotPositionReport robotPosition={robotPosition} />).toJSON()
    expect(report).toMatchSnapshot()
  });
});
