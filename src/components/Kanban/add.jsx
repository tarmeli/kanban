import React from 'react';
import PropTypes from 'prop-types';

const Add = ({ onSubmitTask }) => (
  <div className="form">
    <h1>Add a Task</h1>
    <form onSubmit={onSubmitTask}>
      <input
        placeholder="Task Name"
        className="form__control form__control--text"
        type="text"
        name="name"
        id="name"
        required
      />

      <input
        placeholder="Priority 0-9"
        className="form__control form__control--number"
        type="number"
        name="priority"
        id="priority"
        min="0"
        max="9"
        required
      />

      <input
        type="text"
        className="form__control form__control--date"
        name="deadline"
        id="deadline"
        onFocus={(e) => {
          e.target.type = 'date';
        }}
        onBlur={(e) => {
          e.target.type = 'text';
        }}
        placeholder="Date"
      />

      <textarea
        placeholder="Task Description"
        className="form__control form__control--textarea"
        type="text"
        name="body"
        id="body"
      />
      <input className="button button--wide" type="submit" value="Submit" />
    </form>
  </div>
);

Add.propTypes = {
  onSubmitTask: PropTypes.func.isRequired,
};

export { Add };
