import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import { LoadCompleted } from './LoadCompleted';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<LoadCompleted/>);
});
