import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ data, onTaskMove, onTaskDelete }) => (
  <div className="task" id={data.id}>
    <div className="task__title" data-priority={data.priority}>
      {data.name} - {data.priority}
    </div>
    <p className="task__body">{data.body}</p>
    <p className="task__date task__date--deadline">
      Deadline: {new Date(data.deadline).toLocaleDateString('fi-FI')}
    </p>
    <p className="task__date task__date--created">
      Created: {new Date(data.created).toLocaleDateString('fi-FI')}
    </p>
    <div className="task__footer">
      <span
        className="task__prev task__footer-button"
        data-dir="prev"
        disabled={data.taskState <= 1}
        onClick={data.taskState <= 1 ? null : onTaskMove}
        onKeyDown={data.taskState <= 1 ? null : onTaskMove}
        role="button"
        tabIndex={data.id}
      >
        Previous
      </span>
      <span
        className="task__del task__footer-button"
        onClick={onTaskDelete}
        onKeyDown={onTaskMove}
        role="button"
        tabIndex={data.id}
      >
        Delete
      </span>
      <span
        className="task__next task__footer-button"
        data-dir="next"
        onClick={data.taskState >= 3 ? null : onTaskMove}
        disabled={data.taskState >= 3}
        onKeyDown={data.taskState >= 3 ? null : onTaskMove}
        role="button"
        tabIndex={data.id}
      >
        Next
      </span>
    </div>
  </div>
);

Task.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string,
    taskState: PropTypes.number.isRequired,
    priority: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
  onTaskMove: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export { Task };
