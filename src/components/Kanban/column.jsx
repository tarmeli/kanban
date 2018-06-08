import React from 'react';
import PropTypes from 'prop-types';
import { Task } from './';

const Column = ({
  columnTitle, data, onTaskMove, onTaskDelete,
}) => (
  <div className="board-list__column">
    <h2 className="board-list__title">{columnTitle}</h2>
    <div className="board-list__task-view">
      {data.map(item => (
        <Task
          key={item.id}
          data={item}
          onTaskMove={onTaskMove}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  </div>
);

Column.propTypes = {
  columnTitle: PropTypes.string.isRequired,
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

export { Column };
