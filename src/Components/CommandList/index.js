import React from 'react';
import PropTypes from 'prop-types';

const CommandList = ({ commandList }) => {
  return (
    <div className="command-list">
      <div className="command-list-header pl-3 pt-2 pb-2">
        Commands executed
      </div>
      <table className="table m-0 table-sm table-striped table-bordered">
        <tbody>
          {
            commandList.map((command, index) => {
              return(
                <tr key={index}>
                  <td className="p-2 command-row">{command}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

CommandList.propTypes = {
  commandList: PropTypes.array
}

export default CommandList;
