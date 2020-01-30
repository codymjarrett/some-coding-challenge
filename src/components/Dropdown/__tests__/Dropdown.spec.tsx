import React from 'react'
import { render, cleanup } from '@testing-library/react';

import Dropdown from '../Dropdown'

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Dropdown/>);
  expect(asFragment()).toMatchSnapshot();
});

