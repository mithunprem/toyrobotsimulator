import processCommand from '../Utils/commandProcessor';

describe('Process Command', () => {
  const commandList = [];
  let robotPosition = { x: -1, y: -1, direction: '' };
  const placeCommand = 'place 0,0,north';
  const moveCommand = 'move';

  it('should ignore any command before a place command is executed', () => {
    const result = processCommand(moveCommand, commandList, robotPosition);
    expect(result.commandList.length).toEqual(0);
  });

  it('should ignore a place command that will try to place the robot outside the table', () => {
    const command = "place 6,6,north";
    const placeCommandResult = processCommand(command, commandList, robotPosition);
    expect(placeCommandResult.commandList.length).toEqual(0);
  });

  it('should place the robot on the table when a valid PLACE command is executed', () => {
    const placeCommandResult = processCommand(placeCommand, commandList, robotPosition);
    expect(placeCommandResult.commandList.length).toEqual(1);
    expect(placeCommandResult.robotPosition.x).toEqual(0);
    expect(placeCommandResult.robotPosition.y).toEqual(0);
    expect(placeCommandResult.robotPosition.direction).toEqual('north');
  });

  it('should move the robot by one step if a move command is executed after placing the robot, provided the robot will not fall of the table with this move.', () => {
    const placeCommandResult = processCommand(placeCommand, [], robotPosition);
    const moveCommandResult = processCommand(moveCommand, placeCommandResult.commandList, placeCommandResult.robotPosition);
    expect(moveCommandResult.commandList.length).toEqual(2);
    expect(moveCommandResult.robotPosition.x).toEqual(0);
    expect(moveCommandResult.robotPosition.y).toEqual(1);
    expect(moveCommandResult.robotPosition.direction).toEqual('north');
  });

  it('should turn a robot facing north, by -90 degrees to face west, if a left command is executed', () => {
    const placeCommandResult = processCommand(placeCommand, [], robotPosition);
    const directionCommand = "left";
    const directionCommandResult = processCommand(directionCommand, placeCommandResult.commandList, placeCommandResult.robotPosition);
    expect(directionCommandResult.commandList.length).toEqual(2);
    expect(directionCommandResult.robotPosition.direction).toEqual('west');
  });

  it('should turn a robot facing north, by 90 degrees to face east, if a right command is executed', () => {
    const placeCommandResult = processCommand(placeCommand, [], robotPosition);
    const directionCommand = "right";
    const directionCommandResult = processCommand(directionCommand, placeCommandResult.commandList, placeCommandResult.robotPosition);
    expect(directionCommandResult.commandList.length).toEqual(2);
    expect(directionCommandResult.robotPosition.direction).toEqual('east');
  });

  it('should ignore any movements that would make the robot fall from the table', () => {
    const placeCommandResult = processCommand(placeCommand, [], robotPosition);
    const directionCommand = "left";
    const directionCommandResult = processCommand(directionCommand, placeCommandResult.commandList, placeCommandResult.robotPosition);
    // Since the robot is at 0,0 facing left, further move will make the robot fall from the table and hence will be ignored.
    const moveCommandResult = processCommand(moveCommand, directionCommandResult.commandList, directionCommandResult.robotPosition);
    // Ensure that the latest command was ignored and not added to the commandList.
    expect(moveCommandResult.commandList.length).toEqual(2);
    expect(moveCommandResult.robotPosition.x).toEqual(placeCommandResult.robotPosition.x);

    // Now set the robot's to the top right corner again and then try to move it.
    const newPlaceCommand = "place 4,4,north";
    const newPlaceCommandResult = processCommand(newPlaceCommand, moveCommandResult.commandList, moveCommandResult.robotPosition);
    const newMoveCommandResult = processCommand(moveCommand, newPlaceCommandResult.commandList, newPlaceCommandResult.robotPosition);
    expect(newMoveCommandResult.commandList.length).toEqual(3);
    expect(newMoveCommandResult.robotPosition.x).toEqual(newPlaceCommandResult.robotPosition.x);
  });

  it('should set the shouldReportRobotStatus to true for Report command', () => {
    const placeCommandResult = processCommand(placeCommand, [], robotPosition);
    const reportCommand = "report";
    const reportCommandResult = processCommand(reportCommand, placeCommandResult.commandList, placeCommandResult.robotPosition);
    expect(reportCommandResult.shouldReportRobotStatus).toEqual(true);
  });

  it('should reset the robot position and command list when a reset command is executed.', () => {
    const placeCommandResult = processCommand(placeCommand, [], robotPosition);
    const resetCommand = "reset";
    const resetCommandResult = processCommand(resetCommand, placeCommandResult.commandList, placeCommandResult.robotPosition);
    expect(resetCommandResult.commandList.length).toEqual(0);
    expect(resetCommandResult.robotPosition.x).toEqual(-1);
    expect(resetCommandResult.robotPosition.y).toEqual(-1);
    expect(resetCommandResult.robotPosition.direction).toEqual('');
  });

});
