import * as React from 'react';
import { shallow } from 'enzyme';

import { LoadCompleted } from './LoadCompleted';

it('renders without crashing', () => {
  const wrapper = shallow(<LoadCompleted/>);
});
