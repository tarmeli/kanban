import React from 'react';
import { Route } from 'react-router-dom';

import { Kanban } from '../Kanban';

const Content = () => (
  <div className="container">
    <Route path="/" component={Kanban} />
  </div>
);

export { Content };
