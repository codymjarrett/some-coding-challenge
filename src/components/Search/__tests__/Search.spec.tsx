import React from 'react'
import { render, cleanup } from '@testing-library/react';

import Search from '../Search'

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Search/>);
  expect(asFragment()).toMatchSnapshot();
});

