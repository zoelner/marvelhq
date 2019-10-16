import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Character from './pages/Character';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/character/:id" component={Character} />
      <Route
        path="/character/:id/edit"
        render={() => <h1>Edit Character</h1>}
      />
    </Switch>
  );
}
