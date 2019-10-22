import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import CharacterView from './pages/Character/View';
import CharacterEdit from './pages/Character/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/character/:id" exact component={CharacterView} />
      <Route path="/character/:id/edit" exact component={CharacterEdit} />
    </Switch>
  );
}
