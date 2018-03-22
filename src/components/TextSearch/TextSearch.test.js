import React from 'react';
import ReactDOM from 'react-dom';
import { TextSearch } from './TextSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextSearch/>, div);
});
