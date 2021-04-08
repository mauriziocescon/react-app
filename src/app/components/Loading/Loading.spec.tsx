import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import { Loading } from './Loading';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<Loading/>);
});
