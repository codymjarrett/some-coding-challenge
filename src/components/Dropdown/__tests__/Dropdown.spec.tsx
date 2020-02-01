import React from 'react'
import { render, cleanup } from '@testing-library/react';

import Dropdown from '../Dropdown'

afterEach(cleanup);

/* I'm not sure why this test is failing */
it("renders", () => {
  const { asFragment } = render(<Dropdown />);
  expect(asFragment()).toMatchSnapshot();
});

