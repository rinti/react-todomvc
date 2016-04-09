import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import TodoApp from './components/TodoApp';

const todos = List.of(
  Map({id: 1, text: 'Cool', status: 'active', editing: false}),
  Map({id: 2, text: 'Stuff', status: 'completed', editing: false}),
  Map({id: 3, text: 'Hello', status: 'active', editing: false}),
  Map({id: 4, text: 'Ses', status: 'active', editing: false})
);

require('../node_modules/todomvc-app-css/index.css');

ReactDOM.render(
  <TodoApp todos={todos} />,
  document.getElementById('app')
);
