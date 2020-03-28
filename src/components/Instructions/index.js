import React, { Component } from 'react';
import Button from '../Button';
import { Card, CardBody, Collapse, ListGroup, ListGroupItem as Li } from 'reactstrap';

export default class Instructions extends Component  {
  state = {
    showInstructions: false,
  }

  toggleInstructions = () => {
    this.setState({ showInstructions: !this.state.showInstructions });
  }

  render() {
    const { showInstructions } = this.state;
    const buttonLabel = showInstructions ? 'Hide instructions' :
      'View instructions and sample commands';

    return (
      <div className="instructions ml-3 mb-3 mr-3">
        <Button
          className="instructions-button btn btn-link btn-sm p-0"
          label={buttonLabel}
          onClick={this.toggleInstructions} />
        <Collapse className="mt-2 instructions-text text-muted" isOpen={showInstructions}>
          <Card>
            <CardBody>
              <p className="pb-2">
                A toy robot, waiting for your command to move around on a 5 x 5
                square tabletop. And don't worry, he is safe guarded from
                falling off the table even if you (intentionally or
                unintentionally) command it to !
              </p>
              <p>Valid commands :</p>
              <ListGroup>
                <Li>
                  <b>PLACE X,Y,DIRECTION</b> - To place the robot on the table
                  at the position (X,Y) facing the DIRECTION specified.
                </Li>
                <Li>
                  <b>MOVE</b> - To move the robot by one step in the direction
                  it is currently facing.
                </Li>
                <Li>
                  <b>LEFT</b> - To rotate the robot counter clockwise by 90
                  degress without changing it's position.
                </Li>
                <Li>
                  <b>RIGHT</b> - To rotate the robot clockwise by 90 degress
                  without changing it's position.
                </Li>
                <Li>
                  <b>REPORT</b> - To get the current X,Y and DIRECTION of the robot.
                </Li>
                <Li>
                  <b>RESET</b> - To reset the robot's position and take it off the table.
                </Li>
              </ListGroup>
              <p className="mt-3">Notes :</p>
                <ul className="pl-3 m-0">
                  <li>
                    The position 0,0 is the SOUTH WEST most corner of the table.
                  </li>
                  <li>
                    The first valid command to the robot is a PLACE command.
                    The application will discard all commands in the sequence
                    until a valid PLACE command has been executed.
                  </li>
                  <li>
                    A robot that is not on the table will ignore the MOVE,
                    LEFT, RIGHT, REPORT and RESET commands
                  </li>
                </ul>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}



//   - .
