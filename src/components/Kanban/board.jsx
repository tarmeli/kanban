import React from 'react';
import PropTypes from 'prop-types';

import { Column } from './';

const Board = ({ data, onTaskMove, onTaskDelete }) => (
  <div className="board">
    <div className="board-list">
      <Column
        data={data.filter(item => item.taskState === 1)}
        columnTitle="ToDo"
        onTaskMove={onTaskMove}
        onTaskDelete={onTaskDelete}
      />
      <Column
        data={data.filter(item => item.taskState === 2)}
        columnTitle="In Progress"
        onTaskMove={onTaskMove}
        onTaskDelete={onTaskDelete}
      />
      <Column
        data={data.filter(item => item.taskState === 3)}
        columnTitle="Done"
        onTaskMove={onTaskMove}
        onTaskDelete={onTaskDelete}
      />
    </div>
  </div>
);

Board.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string,
    taskState: PropTypes.number.isRequired,
    priority: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  })).isRequired,
  onTaskMove: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export { Board };
