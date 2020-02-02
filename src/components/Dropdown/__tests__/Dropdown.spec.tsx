import React from 'react'
import { render, cleanup } from '@testing-library/react';
import { mockData } from '../../../mock-data/mock-data'

import Dropdown from '../Dropdown'

afterEach(cleanup);

/* I'm not sure why this test is failing */
// it("renders", () => {
//   const { asFragment } = render(<Dropdown />);
//   expect(asFragment()).toMatchSnapshot();
// });

test('<Dropdown />', () => {
  const {debug, container } = render(<Dropdown state={mockData}/>)
  expect(container.firstChild).toMatchSnapshot()
})

